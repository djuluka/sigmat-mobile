import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


import { environment } from '../../../../environments/environment';
import * as  jwt_decode from 'jwt-decode';
import { StoragesService } from '../device/storages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:8080/authenticate';
  apiUrlLogout = 'http://localhost:8089/auth/realms/rtis/protocol/openid-connect/logout';
  clientId = 'spring-boot-app';
  username = 'user';
  password = '123456';
  grantType = 'password';
  acessToken;
  token;
  constructor(private httpClient: HttpClient, private route: Router, private storage: StoragesService) { }

  authenticate(username, password) {
    const body = {
      username: username,
      password: password,
    };
    //return this.httpClient.post<any>('https://localhost:8443/authenticate', body)
    return this.httpClient.post<any>(environment.api+'/authenticate', body)
      .pipe(map(data => {
        this.storage.saveToken(data.token);
        this.storage.saveUser(username);
        return data;
      }));
  }

  /**
    * This is the logout function
    * @param bar This is the bar parameter
    * @returns returns a string version of bar
  */
  logout() {
    this.storage.signOut();
    this.route.navigateByUrl('/login');
  }

  register(data): Observable<any> {
    return this.httpClient.post<any>(environment.api+ '/signup', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }


  isUserAuthenticated() {
    this.token = localStorage.getItem('access_token');
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }

}
