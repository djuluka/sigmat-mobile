import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import {DetailsPageRoutingModule} from './../details/details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    DetailsPageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
