import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  name = 'Jailson da Luz Costa';
  username = 'jailson.costa';
  roles = '[verificator] [brigade]';
  email = 'jailson.da@giz.de';
  country = 'Cabo Verde';
  uniqueId;
  office = '[CVST1] [CVST2] [CVSV1]';

  constructor(private route: Router) { }

  ngOnInit() {
    this.uniqueId = localStorage.getItem('uniqueId');
  }

  back(){
    this.route.navigateByUrl('home');
  }

}
