import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { TranslateConfigService } from '../core/shared/i18n/translate-config.service';

// geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import {DbService} from '../core/services/db/db.service';
import { StoragesService } from '../core/services/device/storages.service';
@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  skipMsg: string = 'Skip';
  deviceID: string;

  constructor(private route: Router,
              private platform: Platform,
              private storageService: StoragesService ,
              private translateConfigService: TranslateConfigService) {
    this.initializeApp();
  }

  initializeApp(){

    this.platform.ready().then(() => {
      this.translateConfigService.getDefaultLanguage();
      this.storageService.getSettings();

      //
    });
  }

  ngOnInit() {
    
  }

  skip(){
    this.route.navigateByUrl('/login');
  }

}
