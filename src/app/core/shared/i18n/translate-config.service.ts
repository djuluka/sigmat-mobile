import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage(){
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    // console.log('Set default language: ' + language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

}

/*

https://www.freakyjolly.com/ionic-4-adding-multi-language-translation-feature-in-ionic-application-using-ngx-translate/#.XzF1wHWoO0k

1 - Service 
ionic generate service translateConfig --skipTests=true

2 - package 
   npm i @ngx-translate/core @ngx-translate/http-loader


*/