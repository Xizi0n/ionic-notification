import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications,
              private platform: Platform, public alertCtrl: AlertController) {

  
  }

  btnPushClicked() {
    this.platform.ready().then( () => {
      this.localNotifications.schedule({
        text: 'Delayed ILocalNotification',
        trigger: {at: new Date(new Date().getTime() + 3600)},
        led: 'FF0000',
        sound: null
      })
    });
  }

}
