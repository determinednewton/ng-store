import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  constructor(private store: StoreService) {
  }

  ngOnInit() {
  }

  red() {
    console.log('red');
    this.store.dispatch({
      type: 'COLOR_CHANGED',
      payload: 'red'
    });
  }

  green() {
    console.log('green');
    this.store.dispatch({
      type: 'COLOR_CHANGED',
      payload: 'green'
    });
  }
}
