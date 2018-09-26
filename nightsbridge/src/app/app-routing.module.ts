import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingComponent } from './pages/missing/missing.component';
import { LandingComponent } from './pages/landing/landing.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'style', component: StyleGuideComponent },
  { path: '**', component: MissingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
