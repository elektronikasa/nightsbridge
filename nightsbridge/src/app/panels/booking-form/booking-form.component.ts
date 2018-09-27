import { Component, OnInit, ViewChild, TemplateRef, EventEmitter, Type } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { MainMenuService } from '../../services/main-menu.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  public checkInValue: Date = new Date(2018, 8, 27);
  public adultListItems: Array<string> = [
    '1 Adult', '2 Adults', '3 Adults', '4 Adults',
    '5 Adults', '6 Adults', '7 Adults', '8 Adults'
  ];
  public childrenListItems: Array<string> = [
    '0', '1', '2', '3', '4'
  ];
  @ViewChild('template', { read: TemplateRef })
  public notificationTemplate: TemplateRef<any>;

  // public type: Type;
  constructor(
    private notificationService: NotificationService,
    private mainMenuService: MainMenuService) { }

  public showSuccess(): void {
    this.notificationService.show({
        content: 'Success notification',
        hideAfter: 600,
        position: { horizontal: 'center', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
    });
  }
  ngOnInit() {
  }
  onMenuClick() {
    this.mainMenuService.open();
  }
}
