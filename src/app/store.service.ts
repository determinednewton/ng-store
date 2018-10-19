import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public subscribers: Function[];
  public reducers: { [key: string]: Function };
  public state: { [key: string]: any };

  constructor() {
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    fn(this.value);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop of Object.keys(this.reducers)) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
