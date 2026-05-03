import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPage2Component } from './pages/landing-page-2/landing-page-2.component';
import { LandingPage3Component } from './pages/landing-page-3/landing-page-3.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
    title: 'Welcome to Gentle Gator Golf Training'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Gentle Gator Golf Tutorials'
  },
  {
    path: 'landing-2',
    component: LandingPage2Component,
    title: 'Drive Align — Find Your Lost Yards'
  },
  {
    path: 'landing-3',
    component: LandingPage3Component,
    title: 'Drive Align — Landing Page 3'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
