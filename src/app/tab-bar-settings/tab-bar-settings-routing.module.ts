import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarSettingsPage } from './tab-bar-settings.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarSettingsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      // for now is better to keep all things simple
      // in 2 version should add the geofense
      /*{
        path: 'geofence',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../geofence/geofence.module').then(m => m.GeofencePageModule)
          }
        ]
      },*/
      {
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../tabs/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarSettingsPageRoutingModule {}
