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
        console.log(state, action);
        return action.payload;
      }
    };
    this.store.state = {
      color: 'green',
    };
  }
}
