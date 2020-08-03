import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    Router
  } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, public toastController: ToastController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('JwtInterceptorService Req:', req);
        const token = localStorage.getItem('access_token');

        /*if (token) {
            req = req.clone({
            setHeaders: {
                'Authorization': token
            }
            });
        }*/
        return next.handle(req);
    }


}
