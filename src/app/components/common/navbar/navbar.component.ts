import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  // @Output() sendToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // getDataFromChild() {
  //   this.sendToParent.emit()
  // }
}
