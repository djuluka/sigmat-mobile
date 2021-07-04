import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ActivatedRoute} from '@angular/router';
import { T1Service } from './../core/services/transit/t1.service';
import {MessageService} from './../core/shared/messages/message.service';
import {UsersService} from './../core/services/user/users.service';


import { environment, BACKEND_NETWORK_ERROR } from '../../environments/environment';
import { StoragesService } from '../core/services/device/storages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnChanges {

  t1s: any = [];
  t1JsonData: any = [];
  userAsycuda: any = [];
  barCode: any ;
  t1InstanceId;
  t1Mrn;
  url: string;
  itemListData = [];
  page_number = 1;
  page_limit = 8;
  public items: Array<{ title: string; note: string; icon: string }> = [];

  private icons = ['bus'];
  constructor(private authService: AuthService,
              private route: Router,
              private _activatedRoute: ActivatedRoute,
              private bcScanner: BarcodeScanner,
              private t1: T1Service,
              private platform: Platform,
              private userAsycudaService: UsersService,
              private messageToastService: MessageService,
              private dataStorage: StoragesService)
              {
                 this.initializeApp();
                 this._activatedRoute.paramMap.subscribe(params => {
                  this.ngOnInit();
              });

              this.platform.backButton.subscribe(() => {
                this.route.navigate(['home']);
              });
  }


  initializeApp() {
    this.t1.getAllT1().subscribe(
      data => {
          this.t1s = data;
          //console.log(data);
      },
      error => {
        this.messageToastService.showToast(environment.backend_network_error);
      }
    );
    this.t1JsonData = this.t1s;

    /* Get from db */
    this.platform.ready().then(() => {
       // get t1 data from database note from  service
      });
  }


  Scan(){
    this.bcScanner.scan().then((data) => {
      // alert(JSON.stringify(data));
      this.barCode = data.text;
      //  ir buscar na base de dados
    }, (err) => {
      // alert(JSON.stringify(err));
      // ser a visual error like network failure
    });
   }

  logout() {
    this.authService.logout();
  }

  settings() {
    // console.log('Settings');
    this.route.navigateByUrl('tabs');
  }

  ngOnInit() {
    //console.log('ngOnInit app');
    let username = this.dataStorage.getUser();
    this.t1.getAllT1().subscribe(
        data => {
            this.t1JsonData = data;
            //console.log(data);
        },
        error => {
          //console.log('network problem', error);
          this.messageToastService.showToast(environment.backend_network_error);
        }
      );
    this.userAsycudaService.getUserInfo(username).subscribe(
        data => {
            this.userAsycuda = data;
        },
        error => {
          ///console.log('network problem', error);
          this.messageToastService.showToast(environment.backend_network_error);
        }
      );
  }

  refresh(){
   this.ngOnInit();
  }

  doInfinite(event) {

  }
  
  ngOnChanges(){
    //console.log('Reload');
  }
  showDetails(item) {
    // console.log('Item: ', item);
    let navigationExtras: NavigationExtras = {
      state: {
        user: item
      }
    };
    this.t1.setCutrent(item);
    this.route.navigate(['detail'], navigationExtras);
  }

  filterItems(ev){
    var val = ev.target.value;
    // console.log(val);
    if (val && val.trim() !== '') {
      this.t1s = this.t1s.filter((item) => {
        //console.log(item.ideMrn.toString());
        return (item.ideMrn.toString().indexOf(val.toUpperCase( )) > -1);
      });
    }
  }

  filter(ev){
    var val = ev.target.value;
    // console.log(val);
    this.initializeApp();
    if (val && val.trim() !== '') {
      this.t1JsonData = this.t1JsonData.filter((item) => {
        //console.log(item.ideMrn.toString());
        return (item.ideMrn.toLowerCase().indexOf(val.toLowerCase( )) > -1);
      });
    }
  }

  operation(item){
    // console.log(item);
    this.t1Mrn = item.ideMrn;
    if (this.t1Mrn && this.t1Mrn !== '') {
       this.t1.setOperation(this.t1Mrn, '','');
     }

  }

}

/**
 * 
 * ionic cordova run android --device  -l -c
 * 
 * ionic cordova run android -l --debug    (debug)
 * 
 * learn Translate -- https://www.freakyjolly.com/ionic-4-adding-multi-language-translation-feature-in-ionic-application-using-ngx-translate/#.XzFGDRkjXs0
 * 
 * https://asbnotebook.com/2020/08/13/ionic-5-to-do-app-with-sqlite-crud-operation/
 * 
 * 
 * https://medium.com/@rajsm139/location-permissions-and-accuracy-ionic-4-cdc9729485b5
 * 
 */