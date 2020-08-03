import { Injectable } from '@angular/core';
import * as jw_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  public getToken(): String{
    return localStorage.getItem('access_token');
  }

  public decodePayloadJWT(): any{
    try {
         return jw_decode(this.getToken());

    }catch (error){
      return null;
  }
  }
}
