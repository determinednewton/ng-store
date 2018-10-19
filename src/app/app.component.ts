import { Component } from '@angular/core';
import { StoreService } from './store.service';
import { interval } from 'rxjs';

declare var window: WindowLocalStorage;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-store';

  constructor(private store: StoreService) {
    this.store.reducers = {
      color: (state, action) => {
        switch (action.type) {
          case 'COLOR_CHANGED': {
            return action.payload;
          }
          // case 'NOTHING_HAPPENED': {
          //   return state;
          // }
        }

        return state;
      }
    };
    this.store.state = {
      color: 'green',
    };
    if (window && window.localStorage && window.localStorage.getItem('store')) {
      this.store.state = JSON.parse(window.localStorage.getItem('store'));
    }

    interval(1000).subscribe(() => {
      if (window && window.localStorage) {
        window.localStorage.setItem('store', JSON.stringify(this.store.state));
      }
    });
  }
}
