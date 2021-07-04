import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  dataToEncrypt: any = { id: 'abcd123', name: 'demoname' };
  encriptedData: string = '';
  secretkey: string = 'yoursecretky';

  message = "Hello World";
  password = "1234567891234567";

  keySize = 256;
  ivSize = 128;
  iterations = 100;

  constructor() {

  }

  // encrypt message before send to backend
  encrypt(msg, pass) {
    let salt = CryptoJS.lib.WordArray.random(128 / 8);
    let iv = CryptoJS.lib.WordArray.random(128 / 8);

    let key = CryptoJS.PBKDF2(this.password, salt, {
      keySize: this.keySize / 32,
      iterations: this.iterations
    });

    let encrypted = CryptoJS.AES.encrypt(this.message, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    console.log('salt.toString(): ' + salt.toString());
    console.log('iv.toString(): ' + iv.toString());
    console.log('encrypted.toString(): ' + encrypted.toString());

    this.encriptedData = salt.toString() + iv.toString() + encrypted.toString();
    // console.log('encrypted.toString(): ' + encrypted.toString());
    return this.encriptedData;
  }

  // dencrypt message  from the backend to mobile 
  dencrypt(msg, pass) {
    // console.log('Msg: ' + msg);
    let salt = CryptoJS.enc.Hex.parse(msg.substr(0, 32));
    let iv = CryptoJS.enc.Hex.parse(msg.substr(32, 32));
    let encrypted = msg.substring(64);

    let key = CryptoJS.PBKDF2(this.password, salt, {
      keySize: this.keySize / 32,
      iterations: this.iterations
    });
    // console.log('encrypted: ' + encrypted);
    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    // console.log('UTF8: '+decrypted.toString(CryptoJS.enc.Utf8));
    return decrypted;
  }
}
