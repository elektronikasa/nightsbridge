import { Component, OnInit, Input, ComponentFactory, ComponentFactoryResolver,
  ViewChildren, ViewContainerRef, AfterViewInit, QueryList } from '@angular/core';
// import { trigger, state, style, transition, animate, animateChild } from '@angular/animations';
import { OverlayPanelService } from '../../services/overlay-panel.service';
import * as _ from 'lodash';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
  // animations: [
  //   trigger('flyInOut', [
  //     // state('in', style({transform: 'translateX(0)'})),
  //     transition(':leave', [
  //       style({transform: 'translateX(-100%)'}),
  //       animate(100)
  //     ]),
  //     transition(':enter', [
  //       animate(100, style({transform: 'translateX(100%)'}))
  //     ])
  //   ])
  // ]
})
export class OverlayPanelComponent implements OnInit, AfterViewInit {
  @ViewChildren('content', { read: ViewContainerRef }) queryList: QueryList<any>;

  animations = [];
  sequence = [];
  activeIndex = 0;
  inactiveIndex = 1;

  isBack = false;
  isOpen = null;
  component;
  title: string;
  isAnimationAllowed = true;
  canNavigateBack = false;

  constructor(private overlayPanelService: OverlayPanelService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  this.overlayPanelService.state.subscribe((val: any) => this.onChangeState(val));
  }

  ngAfterViewInit() {
  // this.containers = this.queryList.toArray();
  // this.containerAnimations = this.containers.map(i => 'next')
  this.queryList.changes.subscribe((change) => this.onUpdate(change));
  }

  onUpdate(change) {
  const { title, component, componentData } = this.sequence.slice(-1)[0];
  setTimeout(() => {
  this.title = title;
  if (!this.isBack) {
   this.addComponent({ container: change.last, componentType: component, componentData });
  }
}, 1);
}

setAnimation(direction) {
  let last = '';
  let previous = '';

  if (direction === 'next') {
    last = 'show';
    previous = 'next';
  } else {
      last = 'back';
      previous = 'show';
  }
  if (this.isAnimationAllowed) {
    setTimeout(() => this.showAnimation({ last, previous }));
  } else {
      this.showAnimation({ last, previous });
  }
}

showAnimation({ last, previous }) {
  this.animations = this.sequence.map((item, i) => {
  if (i === this.sequence.length - 1) {
   return last;
  }
  if (i === this.sequence.length - 2) {
   return previous;
  }
  // keep offscreen
  return 'next';
  });
}

onChangeState({ isOpen, isBack, component, componentData, title }) {
  this.isBack = false;

  if (isBack) {

  // remove extras, but keep components for animating away from
  this.sequence.length = this.overlayPanelService.history.length + 2;
  this.isBack = true;
  this.component = this.sequence.slice(-1)[0];
  this.setAnimation('back');


} else if (isOpen) {
  // remove unused components
  this.sequence.length = this.overlayPanelService.history.length;

  // just update title
  if (this.component === component) {
   // HACK: this causes a "value changed after check" error otherwise
   setTimeout(() => {
     this.title = title;
   });
   return;
  }
  this.component = component;

  if (!this.isOpen) {
   this.isAnimationAllowed = false;
  } else {
   this.isAnimationAllowed = true;
  }
  this.open({ component, componentData, title });
  this.setAnimation('next');
  } else {
  this.isOpen = false;
  }
}

open({ component, componentData, title }) {
  // on any screen after the first (already open, therefore navigated ahead)
  this.canNavigateBack = this.isOpen;

  this.sequence.push({ component, componentData, title });
  // this.createNextPanel({ component, componentData, title });
  this.isOpen = true;
}

close() {
  this.component = null;
  this.overlayPanelService.close();
}

back() {
  if (this.overlayPanelService.history.length === 0) {
  this.close();
  return;
  }
  if (this.overlayPanelService.history.length === 1) {
  this.canNavigateBack = false;
  }
  this.overlayPanelService.back();
}

addComponent({ container, componentType, componentData = {}, anim = 'next' }) {

  container.clear();
  if (!componentType) {
    return null;
  }
  const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(componentType);
  const component = container.createComponent(factory);
  _.map(componentData, (value, key) => {
  // handle emitters
  if (key === 'output') {
   _.map(componentData['output'], (value, key) => {
     component.instance[key].subscribe(e => value(e));
   });
   return;
  }
  component.instance[key] = value;
  });
  return component.instance;
  }
}
