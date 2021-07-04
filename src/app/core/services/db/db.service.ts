import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { T1Service } from './../transit/t1.service';

export interface T1Interface {
  id: number;
  mrn: string;
  cmpConNam: string;
}

@Injectable({
  providedIn: 'root'
})

export class DbService {

  // private dbInstance: SQLiteObject;
  private t1s: any;

  constructor(private platform: Platform,
              //private sqlite: SQLite,
              private t1Service: T1Service) {
             /*this.platform.ready().then(() => {
                this.sqlite.create({
                  name: 't1Data.d',
                  location: 'default'
                })
                  .then((db: SQLiteObject) => {
                    this.dbInstance = db;
                    this.getData();
                  });
              });*/

  }

  getData() {
    console.log('DbService');
    // se estar login

    // get select from all T1.
    this.t1Service.getAllT1().subscribe(
      data => {
        console.log('success', data);
        // save to sqlite
        //this.t1s = data;
      },
      error => {
        console.log('network problem', error);
        // this.messageToastService.showToast(environment.backend_network_error);
      }
    );
  }
/*
  async getAllToDos() {
    let t1: T1Interface[] = [];
    return this.sqlite.create({ name: 't1Data.db', location: 'default' }).then(
      (db) => {
        this.dbInstance = db;
        db.executeSql('CREATE TABLE IF NOT EXISTS '
          + 'T1(ID INTEGER PRIMARY KEY AUTOINCREMENT,'
          + ' mrn VARCHAR(20), cmpConNam VARCHAR(100))', [])
          .catch(e => console.log(e));
        t1 = this.getAllRecords();
      }
    ).catch().then((e) => {
      console.log(e);
      return t1;
    });
  }

  private getAllRecords(): T1Interface[] {
    let t1: T1Interface[] = [];
    this.dbInstance.executeSql('select * from TODO', []).then(
      (res) => {
        for (var x = 0; x < res.rows.length; x++) {
          t1.push(res.rows.item(x));
        }
      }
    ).catch(e => {
      console.log(e);
    });
    return t1;
  } */

}
