import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  //templateUrl: './first.component.html',
  template: '<h1>Hello World!</h1>',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
