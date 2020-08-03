import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8089/auth/realms/rtis/protocol/openid-connect/token';
  clientId = 'spring-boot-app';
  username = 'user';
  password = '123456';
  grantType = 'password';
  constructor(private httpClient: HttpClient) { }

   login(user, pass) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new URLSearchParams();
    body.set('client_id', this.clientId);
    body.set('username', this.username);
    body.set('password', this.password);
    body.set('grant_type', this.grantType);


    return this.httpClient.post(this.apiUrl, body.toString(), { headers}
      ).subscribe(response => {
        console.log(response);
    });
  }


  logout(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'signout')
      .pipe(
        tap(_ => this.log('logout')),
        catchError(this.handleError('logout', []))
      );
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
