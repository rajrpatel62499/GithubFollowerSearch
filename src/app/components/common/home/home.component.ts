import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  @Output() sendToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.sendToParent.emit("abc");
  }

  OnButtonClick(myname, e) {
    console.log(e);

    this.sendToParent.emit(myname);
  }

}
