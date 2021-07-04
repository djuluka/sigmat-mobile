import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private device: Device) { 

  }

  public getSettings(): any{
    //console.log(this.device.model)
  }
}

