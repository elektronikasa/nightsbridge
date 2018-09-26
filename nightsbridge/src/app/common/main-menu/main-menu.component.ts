import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  isOpen: boolean;
  constructor(private mainMenuService: MainMenuService, private r: ComponentFactoryResolver ) { }

  ngOnInit() {
    this.mainMenuService.state.subscribe(({ isOpen }) => {
      this.isOpen = isOpen;
    });
  }

  close() {
    this.mainMenuService.close();
  }
}
