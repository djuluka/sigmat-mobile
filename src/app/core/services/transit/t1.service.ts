import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CryptoService} from './../crypto/crypto.service';
import { environment } from '../../../../environments/environment';
// import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class T1Service {
  current;
  sendToOperation;
  params;

  constructor(private http: HttpClient, private cryptoService: CryptoService) {

  }

  getAllT1(){
    return this.http.get(environment.api + '/api/v1/t1/all');
  }

  getT1ById(instanceId){
    return this.http.get(environment.api + '/api/v1/t1/goods/' + instanceId);
  }

  setOperation(ideMrn, operation, instanceId){
    //console.log('this.currentT1.instanceId: '+ instanceId);
    this.params = {'mrn': ideMrn,
                   'id': instanceId
                  }


    // send all operation this constante envirements
    switch (operation) {
      case 'Exit':
            //console.log('Go to Exit');
            this.sendToOperation = '';
            break;
      case 'Initiated':
            //console.log('Go to Initiated');
            this.sendToOperation = 'passage';
            break;
      case 'Created':
            //console.log('Go to Created');
            this.sendToOperation = 'departure';
            break;
      case 'Entered':
            //console.log('Go to Entered');
            this.sendToOperation = 'arrival';
            break;
      default:
         // console.log('invalid direction');

    }
    this.http.post<any>(environment.api + '/api/v1/t1/' + this.sendToOperation, this.params ).subscribe(data => {
 
  });
    return '';
  }

  setCutrent(item) {
    this.current = item;
  }
  getCurrent() {
    return this.current;
  }

}
