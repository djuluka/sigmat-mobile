import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';

// translate service
import { TranslateConfigService } from '../core/shared/i18n/translate-config.service';

// get goods information from service 
import { T1Service } from '../core/services/transit/t1.service';

// error messages
import { MessageService } from './../core/shared/messages/message.service';

import { TranslateService } from '@ngx-translate/core'; // add this

// geolocation
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

declare var google;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  name = 'Jailson da Luz Costa';
  username = 'jailson.costa';
  roles = '[verificator] [brigade]';
  email = 'jailson.da@giz.de';
  country = 'Cabo Verde';
  uniqueId;
  office = '[CVST1] [CVST2] [CVSV1]';
  selectedLanguage: string;
  lang;

  locale;
  defaultLanguage;
  languages = [
    { id: 'pt_PT', name: 'PT' },
    { id: 'fr_FR', name: 'FR' },
    { id: 'en_US', name: 'EN' }];

  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  address: string;
  estadoOperacoes = 'Sem acesso as operacoes';

  // for google maps
  options: GeolocationOptions;
  currentPos: Geoposition;
  distance: any = 0;
  distancePermited: any = 500 ;
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;

  constructor(private route: Router,
    private translateConfigService: TranslateConfigService,
    private translate: TranslateService,
    private t1: T1Service,
    private messageToastService: MessageService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
    //this.initializeApp();
  }
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      // parte das cornedanas deve vir ref tables office
      //this.CalculateDistance(resp.coords.latitude,resp.coords.longitude);
      this.distance = this.getDistanceFromLatLonInKm(14.86707958431748, -23.44606624110736,6.236029155027504, 1.323714155536405);
      console.log(this.distance);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

 getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  back() {
    this.route.navigateByUrl('home');
  }

}

// https://medium.com/@falomoore/styling-native-google-maps-in-ionic-ae453326f19

// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula