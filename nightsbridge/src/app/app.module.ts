// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as _ from 'lodash';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import { SliderComponent } from './common/slider/slider.component';

// Shared Components
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ButtonComponent } from './common/button/button.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { MenuListItemsComponent } from './common/main-menu/menu-list-items/menu-list-items.component';

// Kendo UI Components

// Pages
import { LandingComponent } from './pages/landing/landing.component';
import { MissingComponent } from './pages/missing/missing.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';

// Services
import { MainMenuService } from './services/main-menu.service';
import { WizardService } from './services/wizard.service';
import { BookingFormComponent } from './panels/booking-form/booking-form.component';
import { RoomInfoComponent } from './common/room-info/room-info.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NotificationModule } from '@progress/kendo-angular-notification';





// Pipes


@NgModule({
  declarations: [
    AppComponent,
    // Shared common components
    HeaderComponent,
    FooterComponent,
    ButtonComponent,

    // Pages
    LandingComponent,
    MissingComponent,
    StyleGuideComponent,

    // Menu
    MainMenuComponent,
    MenuListItemsComponent,
    // Ui
    SliderComponent,

    // Panels
    BookingFormComponent,

    RoomInfoComponent,

    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    FormsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ButtonsModule,
    DropDownsModule,
    NotificationModule
  ],
  providers: [
    MainMenuService,
    WizardService
  ],
  entryComponents: [
    MenuListItemsComponent,
    BookingFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
