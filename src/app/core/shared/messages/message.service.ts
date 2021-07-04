import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageToast: any;

  constructor(public toast: ToastController) { }

  showToast(error) {
    this.messageToast = this.toast.create({
      message: error,
      duration: 5000,
      position: 'middle',
      color: 'danger'
    }).then((toastData) => {
      toastData.present();
    });
  }
  HideToast() {
    this.messageToast = this.toast.dismiss();
  }
}

/*
 Learn base: https://www.freakyjolly.com/ionic-4-show-native-like-toast-messages-in-ionic-application-in-2-steps-without-any-plugin/#.XzE3shkjXs0
*/
