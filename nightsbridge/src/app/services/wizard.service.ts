import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

class Wizard {
  data: BehaviorSubject<any>;
  subscriptions: Map<FormGroup, Subscription> = new Map<FormGroup, Subscription>();
  constructor(public id: string) {
    this.data = new BehaviorSubject<any>({});
  }

  watch(form: FormGroup) {
    this.subscriptions.set(form, form.valueChanges.subscribe(data => this.update(data)));
  }

  removeWatch(form) {
    this.subscriptions.get(form).unsubscribe();
  }

  cleanup() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  update(data: object) {
    const wizardData = {};
    for (const [key, value] of Object.entries(data)) {
      wizardData[key] = value;
    }
    this.data.next(_.merge(this.data.value, wizardData));
  }
}

@Injectable()
export class WizardService {
  private data: { [name: string]: Wizard } = {};

  constructor() { }

  start(id: string) {
    this.remove(id);
    this.data[id] = new Wizard(id);
    return this.data[id];
  }

  remove(id: string) {
    const wizard = this.find(id);
    if (!wizard) {
      return;
    }
    wizard.cleanup();
    // TODO: Remove other listeners
    delete this.data[id];
  }

  find(id: string): Wizard {
    if (!Object.hasOwnProperty.call(this.data, id)) {
      return null;
    }
    return this.data[id];
  }
}
