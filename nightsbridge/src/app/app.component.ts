import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { MainMenuService } from './services/main-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuVisible = false;

  constructor(private mainMenuService: MainMenuService) {  }

  ngOnInit() {
    // ElementQueries.listen();
    // ElementQueries.init();

    this.mainMenuService.state.subscribe(({ isOpen }) => this.isMenuVisible = isOpen);
  }
}
