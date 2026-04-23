import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, BannerComponent, FooterComponent],
    template: `
    <app-header />
    <app-banner />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
    styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
