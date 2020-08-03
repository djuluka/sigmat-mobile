import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  skipMsg: string = 'Skip';
  UniqueDeviceID: string;

  constructor(private route: Router, private uniqueDeviceID: UniqueDeviceID) { }

  ngOnInit() {

    this.getUniqueDeviceID();
    localStorage.setItem('uniqueId', this.UniqueDeviceID);
  }

  skip(){
    this.route.navigateByUrl('/login');
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = 'Error! ${error}';
      });
  }

}
