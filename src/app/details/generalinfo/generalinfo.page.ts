import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


// alert
import { AlertController } from '@ionic/angular';

import { environment } from '../../../environments/environment';

// translate service
import { TranslateConfigService } from '../../core/shared/i18n/translate-config.service';


// get goods information from service
import { T1Service } from '../../core/services/transit/t1.service';

// error messages
import { MessageService } from './../../core/shared/messages/message.service';
import { GeoService } from 'src/app/core/shared/services/geo.service';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.page.html',
  styleUrls: ['./generalinfo.page.scss'],
})
export class GeneralinfoPage implements OnInit {

  currentT1: any;
  num = [];
  innerIty;
  newIty: any[][];
  value;
  arr1;
  arr2;
  arr3;
  arr4;
  offType;
  goodInfo: any;
  t1Mrn;
  currentOperation;



  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private t1: T1Service,
    private messageToastService: MessageService,
    public alertController: AlertController,
    public canOperation: GeoService) {


    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentT1 = this.router.getCurrentNavigation().extras.state.user;
      }
    });
    this.initializeApp();
  }

  initializeApp() {
  }

  ngOnInit() {

    this.t1.getT1ById(this.currentT1.instanceId).subscribe(
      data => {
        this.goodInfo = data;
      },
      error => {
        console.log('network problem', error);
        this.messageToastService.showToast(environment.backend_network_error);
      }
    );

    const splits = this.currentT1.trpItyDet.split('#');
    this.arr1 = splits[0].split(':');
    this.arr2 = splits[1].split(':');
    this.arr3 = splits[2].split(':');
    this.arr4 = splits[3].split(':');



    for (let entry of this.arr1) {
      if (entry === '1') {
        this.offType = 'Depart. Office';
      }
    }
    this.arr1.splice(2, 1, this.offType);

    for (let entry of this.arr2) {
      if (entry === '4') {
        this.offType = 'Border Exit';
      }
    }
    this.arr2.splice(2, 1, this.offType);

    for (let entry of this.arr3) {
      if (entry === '3') {
        this.offType = 'Border Entry';
      }
    }
    this.arr3.splice(2, 1, this.offType);

    for (let entry of this.arr4) {
      if (entry === '5') {
        this.offType = 'Arrival Offcie';
      }
    }
    this.arr4.splice(2, 1, this.offType);
  }

  submitData(){

    /// execute primeiro depois confirma
    this.canOperation.loadMap();
    this.operationAlertConfirm();
  }

  async operationAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Operation!',
      message: '',
      buttons: [
        {
          text: 'Cancel Operation',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            // get curent distace from user cordinate actual to the office  if not show error
           
            this.t1Mrn = this.currentT1.ideMrn;
            if (this.t1Mrn && this.t1Mrn !== '') {
              this.t1.setOperation(this.t1Mrn, this.currentT1.ideSts, this.currentT1.instanceId);
            }
            setTimeout(() => {
               this.router.navigateByUrl('home');
            }, 2000);


          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
