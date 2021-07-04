import { Injectable } from '@angular/core';
// geolocation
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  options: GeolocationOptions;
  currentPos: Geoposition;
  distance: any = 0;
  distancePermited: any = 500;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
    //this.initializeApp();
  }

  // passar as cordenadas Long, Lat que vem do server  
   loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      // parte das cornedanas deve vir ref tables office
      //this.CalculateDistance(resp.coords.latitude,resp.coords.longitude);
      this.distance = this.getDistanceFromLatLonInKm(14.86707958431748, -23.44606624110736, 6.236029155027504, 1.323714155536405);
      console.log('Service: '+this.distance);

      if (this.distance > 1) {
        return 1;
      } else {
        return 0;
      }

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}
