import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';
import { BookingFormComponent } from '../../panels/booking-form/booking-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainMenuService: MainMenuService) { }

  ngOnInit() {}

  onMenuClick() {
    this.mainMenuService.open();
  }
}
