import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page-3.component.html',
  styleUrl: './landing-page-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage3Component {}
