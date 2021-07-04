import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralinfoPageRoutingModule } from './generalinfo-routing.module';

import { GeneralinfoPage } from './generalinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralinfoPageRoutingModule
  ],
  declarations: [GeneralinfoPage]
})
export class GeneralinfoPageModule {}
