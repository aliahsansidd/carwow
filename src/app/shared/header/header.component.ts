import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileNav = false;
  one = true;
  boxType = 'boxOne';
  navone = true;
  navboxType = 'boxOne';
  tabTrigger(item) {
    // debugger;
    let boxType = '';
    if (item == "boxOne") {
      boxType = 'boxOne';
    }
    if (item == "boxTwo") {
      boxType = 'boxTwo';
    }   
    this.boxType = boxType;
  }
  navTrigger(item) {
    // debugger;
    let navboxType = '';
    if (item == "navboxOne") {
      navboxType = 'navboxOne';
    }
    if (item == "navboxTwo") {
      navboxType = 'navboxTwo';
    }   
    this.navboxType = navboxType;
  }
  constructor() { }

  ngOnInit() {
  }

}
