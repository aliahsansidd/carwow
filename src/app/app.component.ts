import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  mobileNav = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  specialOffer = [
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
    brand : 'Mercedes',
    class : 'A-Class',
    discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
    rrp : 'Â£23,755',
    carwow: 'Â£20,549',
   },
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
    brand : 'Mercedes',
    class : 'A-Class',
    discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
    rrp : 'Â£23,755',
    carwow: 'Â£20,549',
   },
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
    brand : 'Mercedes',
    class : 'A-Class',
    discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
    rrp : 'Â£23,755',
    carwow: 'Â£20,549',
   },
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
    brand : 'Mercedes',
    class : 'A-Class',
    discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
    rrp : 'Â£23,755',
    carwow: 'Â£20,549',
   },
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
    brand : 'Mercedes',
    class : 'A-Class',
    discription : 'Â£1,500 manufacturer support now available on both cash and finance purchases',
    rrp : 'Â£23,755',
    carwow: 'Â£20,549',
   },
   {
    logo : 'assets/img/download.png',
    img : './assets/img/car-1.png',
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
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324
        },
        {
          id: 321
        },
        {
          id: 435
        },
        {
          id: 524
        },
        {
          id: 235
        }
      ]
    };
    //Item object for Fashion
    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 643
        },
        {
          id: 532
        },
        {
          id: 232
        },
        {
          id: 874
        },
        {
          id: 193
        }
      ]
    };
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
   //Move to Next slide
   slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
}
