import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoTutorial } from '../../models/video-tutorial.model';

@Component({
  selector: 'app-free-video',
  standalone: true,
  template: `
    @if (video(); as v) {
      <article class="free-video">
        <h2>{{ v.title }}</h2>
        <p class="lead">{{ v.description }}</p>
        <div class="video-container">
          <iframe
            [src]="safeYoutubeUrl()"
            loading="lazy"
            style="border:0;position:absolute;top:0;height:100%;width:100%;"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowfullscreen="true"
            title="Free video player for {{ v.title }}"
          ></iframe>
        </div>
      </article>
    }
  `,
  styles: `
    .free-video {
      background: var(--white);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      padding: 1.5rem;
    }

    .free-video .lead {
      font-size: 1.05rem;
      margin-bottom: 1rem;
    }

    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      margin-top: 1rem;
      border-radius: var(--border-radius);
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreeVideoComponent {
  public video = input.required<VideoTutorial>();
  #sanitizer = inject(DomSanitizer);
  public safeYoutubeUrl = computed(() => {
    const videoId = this.video().youtubeId;
    const url = `https://iframe.mediadelivery.net/embed/503806/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`;
    return this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
