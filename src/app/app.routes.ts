import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

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
    path: '**',
    redirectTo: ''
  }
];
