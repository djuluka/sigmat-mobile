import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsinfoPage } from './goodsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsinfoPageRoutingModule {}
