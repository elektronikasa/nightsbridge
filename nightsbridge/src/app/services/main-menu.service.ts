import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MainMenuService {
  state: BehaviorSubject<any> = new BehaviorSubject<any>({ isOpen: false });

  constructor() {
  }

  open() {
    this.updateValue({ isOpen: true });
  }

  close() {
    this.updateValue({ isOpen: false });
  }

  toggle() {
    this.updateValue({ isOpen: !this.state.value.isOpen });
  }

  updateValue({ isOpen }) {
    this.state.next({ isOpen });
  }
}
