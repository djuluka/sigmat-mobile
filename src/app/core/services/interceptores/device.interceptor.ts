import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log('Get Device All settins for Log');
        // get all infor from storage
        return next.handle(httpRequest);
    }
}