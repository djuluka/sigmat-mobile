import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TokenInterceptor} from './core/services/interceptores/token.interceptor';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

// QR Code
// import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';


// translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './core/shared/i18n/translate-config.service';


// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

 // https://medium.com/ampersand-academy/ionic-4-tabs-example-from-scratch-step-by-step-tutorial-c101fb44cd05
import {TabBarSettingsPageRoutingModule} from './tab-bar-settings/tab-bar-settings-routing.module';
import {DetailsPageRoutingModule} from './details/details-routing.module';

// localdb 
import { SQLite } from '@ionic-native/sqlite/ngx';

// defenir perimetro de uso
import { Geofence } from '@ionic-native/geofence/ngx';

import { Device } from '@ionic-native/device/ngx';
import { DeviceInterceptor } from './core/services/interceptores/device.interceptor';

// load language
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            HttpClientModule,
            // https://medium.com/ampersand-academy/ionic-4-tabs-example-from-scratch-step-by-step-tutorial-c101fb44cd05
            TabBarSettingsPageRoutingModule,
            DetailsPageRoutingModule,
            IonicModule.forRoot(),
            TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useFactory: (LanguageLoader),
                deps: [HttpClient]
              }
            }),
            AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    TranslateConfigService,
    Geolocation,
    NativeGeocoder,
    BarcodeScanner,
    Geofence,
    SQLite,
    Device,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true // parte of angular 8, pode haver muitos providers, tem aue addicionar mesmo que seja um
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:DeviceInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
