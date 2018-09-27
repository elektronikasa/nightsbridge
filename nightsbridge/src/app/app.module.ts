// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as _ from 'lodash';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/add/operator/map';
import { SliderComponent } from './common/slider/slider.component';
import { OverlayPanelComponent } from './common/overlay-panel/overlay-panel.component';
import { OverlayPanelHeaderComponent } from './common/overlay-panel/overlay-panel-header/overlay-panel-header.component';

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
import { OverlayPanelService } from './services/overlay-panel.service';
import { WizardService } from './services/wizard.service';

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
    OverlayPanelComponent,
    OverlayPanelHeaderComponent,
    // Ui
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainMenuService,
    OverlayPanelService,
    WizardService
  ],
  entryComponents: [
    MenuListItemsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
