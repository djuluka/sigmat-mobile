import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardPageRoutingModule } from './onboard-routing.module';

// translate 
import { TranslateModule } from '@ngx-translate/core';

import { OnboardPage } from './onboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardPageRoutingModule,
    TranslateModule
  ],
  declarations: [OnboardPage]
})
export class OnboardPageModule {}
