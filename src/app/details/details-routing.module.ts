import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailsPage,
    children: [
      {
        path: 'generalinfo',
        children: [
          {
            path: '',
            loadChildren: () => import('./generalinfo/generalinfo.module').then( m => m.GeneralinfoPageModule)
          }
        ]
      },
      {
        path: 'transportinfo',
        children: [
          {
            path: '',
            loadChildren: () => import('./transportinfo/transportinfo.module').then( m => m.TransportinfoPageModule)
          }
        ]
      },
      {
        path: 'goodsinfo',
        children: [
          {
            path: '',
            loadChildren: () => import('./goodsinfo/goodsinfo.module').then( m => m.GoodsinfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/detail/generalinfo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../detail/generalinfo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {

}
