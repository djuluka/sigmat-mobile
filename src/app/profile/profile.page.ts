import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';

import { environment } from '../../environments/environment';

// translate service
import { TranslateConfigService } from '../core/shared/i18n/translate-config.service';

// get goods information from service 
import { T1Service } from '../core/services/transit/t1.service';

// error messages
import { MessageService } from './../core/shared/messages/message.service';

import { TranslateService } from '@ngx-translate/core'; // add this

// geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

// import userservice

import { Device } from '@ionic-native/device/ngx';

import { UsersService } from './../core/services/user/users.service';
import { StoragesService } from '../core/services/device/storages.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name = 'Jailson da Luz Costa';
  username = 'jailson.costa';
  roles = '[verificator] [brigade]';
  email = 'jailson.da@giz.de';
  country = 'Cabo Verde';
  uniqueId;
  office = '[CVST1] [CVST2] [CVSV1]';
  selectedLanguage: string;
  lang;
  userAsycuda: any = [];

  locale;
  defaultLanguage;
  languages = [
    { id: 'pt_PT', name: 'PT' },
    { id: 'fr_FR', name: 'FR' },
    { id: 'en_US', name: 'EN' }];

  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  address: string;
  idx = 0;
  prop;
  value;

  constructor(private route: Router,
    private translateConfigService: TranslateConfigService,
  //  private translate: TranslateService,
   // private t1: T1Service,
    private messageToastService: MessageService,
  //  private geolocation: Geolocation,
    private userAsycudaService: UsersService,
    private platform: Platform,
   // private nativeGeocoder: NativeGeocoder,
     private device: Device,
     private storage: StoragesService) {
    this.initializeApp();
  }

  ngOnInit() {
    this.uniqueId = localStorage.getItem('uniqueId');
    
    this.lang = this.translateConfigService.getDefaultLanguage();
  }

  back() {
    this.route.navigateByUrl('home');
  }

  changeLanguage() {
    // console.log(this.lang);
    this.translateConfigService.setLanguage(this.lang);
  }

  initializeApp() {
    let username = this.storage.getUser();
    this.platform.ready().then(() => {
      this.userAsycudaService.getUserInfo(username).subscribe(
        data => {
          // this.t1JsonData = data;
          this.userAsycuda = data;
        },
        error => {
          //console.log('network problem', error);
          this.messageToastService.showToast(environment.backend_network_error);
        }
      );
    });
    //console.log('getUser1', Object(this.userAsycuda)['fullname']);
   /*  this.prop = Object.keys(this.userAsycuda)[this.idx];
    this.value = this.userAsycuda[this.prop];
    console.log(this.prop, this.value); */
  }

}

