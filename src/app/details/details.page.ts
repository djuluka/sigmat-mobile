import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


// alert
import { AlertController, Platform } from '@ionic/angular';

import { environment } from '../../environments/environment';

// translate service
import { TranslateConfigService } from '../core/shared/i18n/translate-config.service';


// get goods information from service
import { T1Service } from '../core/services/transit/t1.service';

// error messages
import { MessageService } from './../core/shared/messages/message.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

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



  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private t1: T1Service,
              private platform: Platform,
              private messageToastService: MessageService,
              public alertController: AlertController) {


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
    this.platform.ready().then(() => {
      this.t1.getT1ById(this.currentT1.instanceId).subscribe(
        data => {
          // console.log('success', data);
          this.goodInfo = data;
          // console.log('Dados ti ta bem null: ' + this.goodInfo.attAt3Cod);
        },
        error => {
          // console.log('network problem', error);
          this.messageToastService.showToast(environment.backend_network_error);
        }
      );
      // console.log('OnIint' + this.currentT1.trpItyDet);
      const splits = this.currentT1.trpItyDet.split('#');
      this.arr1 = splits[0].split(':');
      this.arr2 = splits[1].split(':');
      this.arr3 = splits[2].split(':');
      this.arr4 = splits[3].split(':');



      for (let entry of this.arr1) {
        if (entry === '1') {
          this.offType = 'Depart. Office';
          // console.log(entry);
        }
      }
      this.arr1.splice(2, 1, this.offType);

      for (let entry of this.arr2) {
        if (entry === '4') {
          this.offType = 'Border Exit';
          // console.log(entry);
        }
      }
      this.arr2.splice(2, 1, this.offType);

      for (let entry of this.arr3) {
        if (entry === '3') {
          this.offType = 'Border Entry';
          // console.log(entry);
        }
      }
      this.arr3.splice(2, 1, this.offType);

      for (let entry of this.arr4) {
        if (entry === '5') {
          this.offType = 'Arrival Offcie';
          // console.log(entry);
        }
      }
      this.arr4.splice(2, 1, this.offType);
    });
  }

  async operationAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Operation!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel Operation',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm ok');
            this.router.navigateByUrl('home');
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    //console.log(result);
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
