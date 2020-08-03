import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public items: Array<{ title: string; note: string; icon: string }> = [];
  private icons = ['bus'];
  constructor(private authService: AuthService, private route: Router) {

    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: '2019TG121D0000' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }


  logout(){
    this.authService.logout();
  }

  settings(){
    console.log('Settings');
    this.route.navigateByUrl('settings');

  }

  ngOnInit(){
  }

  showDetails(item){
    console.log('Item: ', item);
    this.route.navigateByUrl('details');
  }
}
