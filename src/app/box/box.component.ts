import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  color = 'black';

  constructor(private storeService: StoreService) {
    // this.color = this.storeService.value.color;
    this.storeService.subscribe((state) => {
      this.color = state.color;
    });
  }

  ngOnInit() {
  }

}
