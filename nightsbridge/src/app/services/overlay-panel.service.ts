import { WizardService } from './wizard.service';
import { Injectable, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

interface Message {
  isOpen: boolean;
  component?: Component;
  title?: string;
  section?: string;
}

interface PanelState {
  component?: any;
  componentData?: Object;
  title?: string;
  section?: string;
  wizardId?: string;
}

@Injectable()
export class OverlayPanelService {
  state: BehaviorSubject<Message> = new BehaviorSubject<Message>({ isOpen: false });
  history: PanelState[] = [];

  constructor(private wizard: WizardService) {
  }

  open({ component, componentData, title, section, wizardId }: PanelState) {
    if (wizardId) {
      if (!this.wizard.find(wizardId)) {
        this.wizard.start(wizardId);
      }
    }
    if (!componentData) {
      componentData = {};
    }
    componentData['wizardId'] = wizardId;
    if (this.state.value.component) {
      this.history.push(this.state.value);
    }
    this.updateValues({ isOpen: true, title, section, component, componentData, isBack: false, history: this.history });
  }

  setTitle({ title, section }) {
    this.updateValues({ title, section });
  }

  close() {
    this.history = [];
    this.updateValues({ isOpen: false, title: '', section: '', component: null, componentData: {}, history: this.history, isBack: false });
  }

  back() {
    const { title, section, component, componentData } = this.history.pop();
    this.updateValues({ title, section, component, componentData, isBack: true, history: this.history });
  }

  toggle() {
    this.updateValues({ isOpen: !this.state.value.isOpen });
  }

  // update only the necessary values, keep the others
  updateValues(values) {
    this.state.next({...this.state.value, ...values});
  }

}
