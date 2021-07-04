import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// tranlate , if note presente will have error (Uncaught (in promise): Error: The pipe 'translate' could not be found!)
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  /*{
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
  },*/
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'tab-bar-settings',
    loadChildren: () => import('./tab-bar-settings/tab-bar-settings.module').then( m => m.TabBarSettingsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'geofence',
    loadChildren: () => import('./geofence/geofence.module').then( m => m.GeofencePageModule)
  },
 /* {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },*/
 /* {
    path: 'perfil',
    loadChildren: () => import('./tab-bar-settings/tab-bar-settings.module').then(m => m.TabBarSettingsPageModule)
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
