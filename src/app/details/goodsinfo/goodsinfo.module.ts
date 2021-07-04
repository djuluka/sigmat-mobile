import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsinfoPageRoutingModule } from './goodsinfo-routing.module';

import { GoodsinfoPage } from './goodsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsinfoPageRoutingModule
  ],
  declarations: [GoodsinfoPage]
})
export class GoodsinfoPageModule {}
