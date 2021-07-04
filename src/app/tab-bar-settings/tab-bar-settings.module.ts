import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBarSettingsPageRoutingModule } from './tab-bar-settings-routing.module';

import { TabBarSettingsPage } from './tab-bar-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarSettingsPageRoutingModule
  ],
  declarations: [TabBarSettingsPage]
})
export class TabBarSettingsPageModule {}
