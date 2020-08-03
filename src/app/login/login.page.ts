import { Component, OnInit } from '@angular/core';


import { AuthService } from '../core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  version: string = "ECOWAS SIGMAT 2010. All rights reserved. Version 0.1";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log('Log------');
    this.authService.login('teste', 'teste');
  }

}
