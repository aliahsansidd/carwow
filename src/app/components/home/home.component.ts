import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  specialOffer = [
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-1.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-2.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-3.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-4.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-5.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },
    {
     logo : 'assets/img/download.png',
     img : './assets/img/cardslider/card-6.jpg',
     brand : 'Mercedes',
     class : 'A-Class',
     discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
     rrp : 'Â£23,755',
     carwow: 'Â£20,549',
    },]
   public selectedIndex = 0;
   public appPages = [
     {
       title: 'Inbox',
       url: '/folder/Inbox',
       icon: 'mail'
     },
     {
       title: 'Outbox',
       url: '/folder/Outbox',
       icon: 'paper-plane'
     },
     {
       title: 'Favorites',
       url: '/folder/Favorites',
       icon: 'heart'
     },
     {
       title: 'Archived',
       url: '/folder/Archived',
       icon: 'archive'
     },
     {
       title: 'Trash',
       url: '/folder/Trash',
       icon: 'trash'
     },
     {
       title: 'Spam',
       url: '/folder/Spam',
       icon: 'warning'
     }
   ];
   public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
   constructor(
     private platform: Platform,
     private splashScreen: SplashScreen,
     private statusBar: StatusBar
   ) {
     this.initializeApp();
   }
 
   initializeApp() {
     this.platform.ready().then(() => {
       this.statusBar.styleDefault();
       this.splashScreen.hide();
     });
   }
 
   ngOnInit() {
     const path = window.location.pathname.split('folder/')[1];
     if (path !== undefined) {
       this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
     }
   }
}

