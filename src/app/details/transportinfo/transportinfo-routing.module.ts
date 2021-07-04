import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportinfoPage } from './transportinfo.page';

const routes: Routes = [
  {
    path: '',
    component: TransportinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportinfoPageRoutingModule {}
