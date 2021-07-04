import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { AuthService } from '../core/services/auth/auth.service';
import { StoragesService } from '../core/services/device/storages.service';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  todo = {}
  username ='';
  password =''; 
  
  version: string = "ECOWAS SIGMAT 2010. All rights reserved. Version 0.1";
  constructor(private authService: AuthService,
    private storageService: StoragesService,
    private platform: Platform,
    private route: Router) {

    this.initializeApp();
  }

 
  logForm() {
    console.log(this.todo)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storageService.getSettings();
    });
  }

  ngOnInit() {

  }
  
  login() {

    console.log(this.username)
    this.authService.authenticate(this.username, this.password)
  //this.authService.authenticate('admin', 'admin123')
      .pipe(first())
      .subscribe(
        data => {
          this.route.navigateByUrl('/home');
        },
        error => {
          console.log(error)
          this.route.navigateByUrl('/login');
        });
  }
}
