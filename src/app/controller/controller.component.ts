import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  red() {
    console.log('red');
  }

  green() {
    console.log('green');
  }
}
