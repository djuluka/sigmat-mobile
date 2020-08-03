import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import {environment} from '../../../../environments/environment';
import * as  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8089/auth/realms/rtis/protocol/openid-connect/token';
  apiUrlLogout = 'http://localhost:8089/auth/realms/rtis/protocol/openid-connect/logout';
  clientId = 'spring-boot-app';
  username = 'user';
  password = '123456';
  grantType = 'password';
  acessToken;
  token;
  constructor(private httpClient: HttpClient, private route: Router) { }

   login(user, pass) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new URLSearchParams();
    body.set('client_id', this.clientId);
    body.set('username', this.username);
    body.set('password', this.password);
    body.set('grant_type', this.grantType);


    return this.httpClient.post(this.apiUrl, body.toString(), { headers}
      ).subscribe(response => {
        this.token = response;
        console.log(this.token.access_token);
        if (this.token.access_token) {
          localStorage.setItem('access_token', this.token.access_token);
          localStorage.setItem('refresh_token', this.token.refresh_token);
          var decode = jwt_decode(this.token.access_token);
          console.log(decode);
          this.route.navigateByUrl('/home');
        }
    });
  }


  logout() {

    const refresToken = localStorage.getItem('refresh_token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('client_id', this.clientId);
    body.set('refresh_token', refresToken );

    if (!refresToken) {
      this.route.navigateByUrl('/login');
    }
    return this.httpClient.post(this.apiUrlLogout, body.toString(), { headers}
      ).subscribe(response => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.route.navigateByUrl('/onboard');
        // console.log(response); cath error e tratar
    });
  }

  register(data): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'signup', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
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
