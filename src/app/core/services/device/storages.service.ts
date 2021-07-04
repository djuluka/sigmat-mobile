import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_NAME = 'auth-name';


/*
localStorage and sessionStorage both extend Storage. There is no difference between them except for the intended "non-persistence" of sessionStorage.

That is, the data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

For sessionStorage, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.
*/
@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor(private device: Device) { 

  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }


  public getToken(): string{ 
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: string) {
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.setItem(USER_NAME, user);
  }

  public getUser() {
    return sessionStorage.getItem(USER_NAME);
  }

  /*public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  } */

  public getSettings(){
    console.log('Model: '+this.device.model)
  }

}
