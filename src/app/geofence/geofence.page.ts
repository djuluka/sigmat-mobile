import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geofence } from '@ionic-native/geofence/ngx';
@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.page.html',
  styleUrls: ['./geofence.page.scss'],
})
export class GeofencePage implements OnInit {

  constructor(private route: Router, private geofence: Geofence) {
    // initialize the plugin
    geofence.initialize().then(
      // resolved promise does not return a value
      () => alert('Geofence Plugin Ready'),
      (err) => alert(err)
    )

  }

  ngOnInit() {
  }
  back() {
    this.route.navigateByUrl('home');
  }
}
