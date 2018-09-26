import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ButtonComponent } from './common/button/button.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MissingComponent } from './pages/missing/missing.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { MenuListItemsComponent } from './common/main-menu/menu-list-items/menu-list-items.component';
import 'rxjs/add/operator/map';
import { MainMenuService } from './services/main-menu.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    LandingComponent,
    MissingComponent,
    StyleGuideComponent,
    MainMenuComponent,
    MenuListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
