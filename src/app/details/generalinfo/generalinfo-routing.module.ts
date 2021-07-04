import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralinfoPage } from './generalinfo.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralinfoPageRoutingModule {}
