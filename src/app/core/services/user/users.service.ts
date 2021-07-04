import { Injectable } from '@angular/core';
import { environment, BACKEND_NETWORK_ERROR } from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUserInfo(user: string){
    //console.log('user: '+user);
    return this.http.get(environment.api + '/api/v1/user/'+user);
  }

}
