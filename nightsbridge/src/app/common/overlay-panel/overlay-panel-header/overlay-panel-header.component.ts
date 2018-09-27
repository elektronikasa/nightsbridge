import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-overlay-panel-header',
  templateUrl: './overlay-panel-header.component.html',
  styleUrls: ['./overlay-panel-header.component.scss']
})
export class OverlayPanelHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
