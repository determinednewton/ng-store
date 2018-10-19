import { Component } from '@angular/core';
import { StoreService } from './store.service';

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
  }
}
