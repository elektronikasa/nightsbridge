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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    LandingComponent,
    MissingComponent,
    StyleGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
