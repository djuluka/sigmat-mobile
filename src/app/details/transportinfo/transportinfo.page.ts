import { Component, OnInit } from '@angular/core';

import {T1Service} from '../../core/services/transit/t1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportinfo',
  templateUrl: './transportinfo.page.html',
  styleUrls: ['./transportinfo.page.scss'],
})
export class TransportinfoPage implements OnInit {

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

  constructor(private t1: T1Service, private router: Router ) {

    this.initializeApp();
  }

  initializeApp() {
   this.currentT1 = this.t1.getCurrent();
  }

  ngOnInit() {
     // console.log('OnIint' + this.currentT1.trpItyDet);
     const splits = this.currentT1.trpItyDet.split('#');
     this.arr1 = splits[0].split(':');
     this.arr2 = splits[1].split(':');
     this.arr3 = splits[2].split(':');
     this.arr4 = splits[3].split(':');

     for (let entry of this.arr1) {
       if ( entry === '1'){
         this.offType = 'Depart. Office';
         // console.log(entry);
       }
     }
     this.arr1.splice(2, 1, this.offType);

     for (let entry of this.arr2) {
       if ( entry === '4'){
         this.offType = 'Border Exit';
         // console.log(entry);
       }
     }
     this.arr2.splice(2, 1, this.offType);

     for (let entry of this.arr3) {
       if ( entry === '3'){
         this.offType = 'Border Entry';
         // console.log(entry);
       }
     }
     this.arr3.splice(2, 1, this.offType);

     for (let entry of this.arr4) {
       if ( entry === '5'){
         this.offType = 'Arrival Offcie';
         // console.log(entry);
       }
     }
     this.arr4.splice(2, 1, this.offType);
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
