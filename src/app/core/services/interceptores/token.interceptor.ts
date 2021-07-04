import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Router
  } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StoragesService } from '../device/storages.service';



@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, public toastController: ToastController,private storageToken: StoragesService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.storageToken.getToken();
        
        if (token) {
         console.log('storageToken inteceptoon: ', token);
            req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}` 
            }
            });
        }
        return next.handle(req);
    }
}

// https://www.thirdrocktechkno.com/blog/how-to-integrate-interceptor-in-angular-9/