import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// get goods information from service
import {T1Service} from '../../core/services/transit/t1.service';

// error messages
import {MessageService} from './../../core/shared/messages/message.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-goodsinfo',
  templateUrl: './goodsinfo.page.html',
  styleUrls: ['./goodsinfo.page.scss'],
})
export class GoodsinfoPage implements OnInit {

  currentT1: any;
  goodInfo: any;
  constructor(private t1: T1Service,
              private messageToastService: MessageService,
              private router: Router ) {

    this.initializeApp();
  }

  initializeApp() {
    this.currentT1 = this.t1.getCurrent();
    //onsole.log(this.t1.getCurrent());
  }

  ngOnInit() {

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
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
