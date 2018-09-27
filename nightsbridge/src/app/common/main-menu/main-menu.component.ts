import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  isOpen: boolean;
  @ViewChild('template', { read: TemplateRef })
    public notificationTemplate: TemplateRef<any>;

    // public type: Type;
    constructor(private mainMenuService: MainMenuService, private notificationService: NotificationService) { }
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
      this.mainMenuService.state.subscribe(({ isOpen }) => {
        this.isOpen = isOpen;
      });
    }

    close() {
      this.mainMenuService.close();
    }
}
