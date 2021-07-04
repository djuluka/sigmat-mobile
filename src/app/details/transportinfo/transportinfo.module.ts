import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportinfoPageRoutingModule } from './transportinfo-routing.module';

import { TransportinfoPage } from './transportinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportinfoPageRoutingModule
  ],
  declarations: [TransportinfoPage]
})
export class TransportinfoPageModule {}
