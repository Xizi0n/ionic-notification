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
        id: 2,
        title: 'Incoming Call Bitch',
        text: 'Get notified pls',
        icon: 'http://example.com/icon.png',
        actions : [
          { id: 'accept', title: 'Felvesz' },
          { id: 'reject', title: 'Lerak' }
        ],
        foreground: true,
        lockscreen: true,
        color: '00FF00'
      })
    });
  }

  secondButtonClick() {
    this.platform.ready().then( () => {
      this.localNotifications.schedule({
        id: 2,
        title: 'Incoming Call Bitch',
        text: 'Get notified pls',
        icon: 'http://example.com/icon.png',
        actions : [
          { id: 'accept', title: 'Felvesz' },
          { id: 'reject', title: 'Lerak' }
        ],
        foreground: true,
        lockscreen: true,
        trigger: {at: new Date(new Date().getTime() + 3600)},
        color: '00FF00'
      })
    });
  }

}
