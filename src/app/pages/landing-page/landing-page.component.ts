import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TrajectoryDisplayComponent } from '../../components/trajectory-display/trajectory-display.component';
import { DistanceOptimizerComponent } from '../../components/distance-optimizer/distance-optimizer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, TrajectoryDisplayComponent, DistanceOptimizerComponent],
  template: `
    <div class="landing-container">


        <article class="blog-post-content">
          <div class="blog-segment">
            <div class="blog-text">
              <h2>Hitting it Further</h2>
                by
                <div class="author-info" style="display: flex; gap: 1rem; padding: 1rem; font-weight: bold; color: var(--primary-green);">
                <img src="assets/images/hoyt_avatar.jpg" alt="Hoyt Hicks" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary-green);">
                Hoyt
              </div>
              <p>
                Over the course of the 2025 golf season I got tired of getting beaten off the tee by my two brothers. Most drives they would out drive me by 20-30yds. I tried different balls and equipment and neither made the impact I was looking for. At this point I decided to do a deep dive and understand what metrics actually mattered on the golf ball and then come up with a simple stepped plan to get me those lost yards.
              </p>
              <p>
                Initially like most people increasing the golf ball velocity seems to be the intuitve first step. The faster I can get the ball to go the further it will go right? Unfortunately it wasn't that simple. My brothers and I used a ball launch monitor and to my suprise I actually had slightly higher ball velocity than either of my brothers.
              </p>
              <p>
              What was different was my launch angle and spin. I had a low launch angle coupled with a higher spin. This made a lot of sense once I saw it. There trajectory looked like it pierced through the air and hit the ground rolling. Where as mine would come off the face and spin up, worst of all hit the ground and stop.
              </p>
            </div>
          </div>
        </article>

      <section class="visualizer-section">
        <div class="section-header">
          <h2>Efficiency is Everything</h2>
        </div>
        <article class="blog-post-content">
          <div class="blog-segment">
            <div class="blog-text">
              <h2>Physics of Flight: Spin is King</h2>
              <p>
                While speed provides the potential, <strong>spin dictates how that energy is used</strong>. 
              </p>
              <p>
                Backspin creates a Magnus effect—the aerodynamic lift that keeps the ball in the air. However, there is a fine line between "functional lift" and "distance-killing drag." Too much spin causes the ball to balloon, climbing too steeply and then falling vertically, which sacrifices both carry and the crucial landing roll. Looking at the simulated trajectories below its easily seen that spin changes the trajectory and distance significantly
              </p>
            </div>
            <div class="blog-image">
              <img src="assets/images/SpinControl.JPG" alt="Spin Control Visualization">
            </div>
          </div>

          <div class="blog-segment reverse">
            <div class="blog-text">
              <h2>The Holy Grail: The Launch-Spin Combo</h2>
              <p>
                True distance optimization happens at the intersection of launch angle and spin rate. There is a general inverse relationship that the best players in the world master:
              </p>
              <ul>
                <li><strong>High Spin / Low Launch:</strong> Typically used for control and "stopping power" on the greens, but a disaster for total distance with the driver.</li>
                <li><strong>Low Spin / High Launch:</strong> The "Long Drive" formula. By launching the ball higher into the air, you can afford to have less spin, allowing the ball to pierce through the air with less drag and maximize roll-out.</li>
              </ul>
              <p>
                Adjusting your attack angle to "hit up" on the ball allows you to achieve that high-launch, low-spin combination that unlocks 20-30 yards of dormant potential in your current swing.
              </p>
            </div>
            <div class="blog-image">
              <img src="assets/images/Spin_With_Launch_combo.JPG" alt="Launch and Spin combination chart">
            </div>
          </div>
        </article>
        
        <div class="simulator-wrapper">
          <div class="simulator-header">
            <h2 style="font-size: 2.25rem; margin-bottom: 0.5rem; color: var(--primary-green);">Simulate your ball flight!</h2>
            <p style="font-size: 1.1rem; color: var(--text-muted); margin: 0;">See how much distance you can gain by optimizing your launch angle and spin</p>
          </div>
          <app-trajectory-display />
        </div>

        <article class="blog-post-content">
          <div class="blog-segment">
            <div class="blog-text">
              <h2>Computer Says So, But Does It Really?</h2>
              <p>
                Initially I had a hard time getting my spin and launch angle to increase. Even with the help of a launch monitor there are so many different dials you can turn:
              </p>
              <ul>
                <li>Stance Width</li>
                <li>Ball Position</li>
                <li>Spine Tilt</li>
                <li>etc.</li>
              </ul>
              <p>
                Even worse a lot of the metrics above affect the other. Hitting more and more balls on a launch monitor led to incosistent results. In an effort to help me visualize a better setup to high launch angle and low spin drives. I created Drive-Align. It features a strong suction that attaches to the driver face and let me dial in my setup. I was able to mess with all of the factors statically and get instant feedback rather than swinging, analyzing video and then trying to make some dynamic change 
              </p>
              <p>
                Very quickly I was able to find my lost distance and consistently. Check out the results below!
              </p>
            </div>
          </div>
        </article>
        
        <div class="optimizer-wrapper">
          <div class="optimizer-header">
            <h2>Real world results</h2>
          </div>
          <app-distance-optimizer />
        </div>

        <article class="blog-post-content">
          <div class="blog-segment">
            <div class="blog-text">
              <h2>Want to try it for yourself?</h2>
              <p>
                The same tool I used was Drive Align from Gentle Gator Golf. It comes with a video series with simple drills to help understand all the knobs to tune and how to optimize them.
              </p>
            </div>
          </div>
        </article>

      </section>

      <section class="product-section">
        <div class="section-header">
          <h2>Engineered for Consistency</h2>
          <p>Every tool is designed to provide immediate tactile and visual feedback.</p>
        </div>
        <div class="bundle-features">
          @for (p of products; track p.title) {
            <app-product-card [product]="p" />
          }
        </div>
      </section>

      <section class="reviews-section">
        <div class="review-header-container">
          <h2>RATED BY GOLFERS LIKE YOU</h2>
          <div class="big-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-num">4.8</span>
          </div>
          <button class="cta-button gold">IMPROVE TODAY</button>
          <p class="coach-text">Coaches and Golfers love our alignment products because it is the fastest way to get great results!</p>
        </div>

        <div class="reviews-columns">
          <div class="column">
            @for (review of reviews.slice(0, 3); track review.author) {
              <div class="review-card themed">
                <div class="card-header">
                  <div class="stars small">★★★★★</div>
                  <div class="author-info">
                    <span class="name">{{ review.author }}</span>
                    <span class="date">{{ review.date }}</span>
                  </div>
                </div>
                <p class="quote">"{{ review.quote }}"</p>
              </div>
            }
          </div>
          <div class="column">
            @for (review of reviews.slice(3, 6); track review.author) {
              <div class="review-card themed">
                <div class="card-header">
                  <div class="stars small">★★★★★</div>
                  <div class="author-info">
                    <span class="name">{{ review.author }}</span>
                    <span class="date">{{ review.date }}</span>
                  </div>
                </div>
                <p class="quote">"{{ review.quote }}"</p>
              </div>
            }
          </div>
        </div>
      </section>

    </div>
  `,
  styles: `
    .landing-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 8rem;
    }

    .badge {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: var(--soft-gray);
      color: var(--primary-green);
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 4rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--dark-slate);
    }

    .highlight {
      color: var(--primary-green);
      position: relative;
    }

    .subtitle {
      font-size: 1.5rem;
      color: var(--text-muted);
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.5;
    }

    .hero-actions {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .section-header p {
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    .product-section {
      margin-bottom: 8rem;
    }

    .bundle-features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .highlight-box {
      background: #eef3ef; /* Washed out light green */
      color: var(--text-main);
      padding: 6rem 4rem;
      border-radius: var(--border-radius);
      margin-bottom: 8rem;
    }

    .highlight-box h2, .highlight-box h3 {
      color: var(--primary-green);
    }

    .explanation-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }

    .linear-explanation {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .linear-item {
      display: flex;
      gap: 3rem;
      align-items: flex-start;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .linear-item:last-child {
      border-bottom: none;
    }

    .step-num {
      font-size: 3rem;
      font-weight: 800;
      color: var(--primary-green);
      opacity: 0.9;
      font-family: 'Inter', sans-serif;
      line-height: 1;
      min-width: 80px;
    }

    .expl-content h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    .expl-content p {
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 700px;
      color: var(--text-muted);
    }

    .icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .expl-item p {
      color: rgba(255,255,255,0.7);
    }

    .visualizer-section {
      margin-bottom: 8rem;
    }

    .secondary-visualizer {
      margin-top: 4rem;
      border: 1px solid #e0e0e0;
      opacity: 0.8;
      transition: var(--transition);
    }

    .secondary-visualizer:hover {
      opacity: 1;
    }

    .reviews-section {
      padding: 6rem 2rem;
      background-color: #f0f7f2; /* Washed out light green */
      color: var(--text-main);
      text-align: center;
      border-radius: var(--border-radius);
    }

    .review-header-container h2 {
      color: var(--primary-green);
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .big-rating {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .big-rating .stars {
      color: var(--accent-gold);
      font-size: 3rem;
    }

    .rating-num {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--accent-gold);
    }

    .cta-button.gold {
      background-color: var(--primary-green);
      color: white;
      font-weight: 700;
      border-radius: 50px;
      padding: 1rem 3rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 3rem;
    }

    .coach-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--dark-slate);
      max-width: 800px;
      margin: 0 auto 4rem;
      line-height: 1.3;
    }

    .reviews-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      text-align: left;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .review-card.themed {
      background: #2b4c3f; /* Dark green from image */
      border: 3px solid #000;
      border-radius: 20px;
      padding: 1.5rem;
      color: white;
      box-shadow: none;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .stars.small {
      color: #ffcc00;
      font-size: 1rem;
    }

    .author-info {
      text-align: right;
    }

    .author-info .name {
      display: block;
      font-weight: 700;
    }

    .author-info .date {
      font-size: 0.8rem;
      opacity: 0.8;
    }

    .review-card.themed .quote {
      font-size: 0.95rem;
      font-style: normal;
      color: white;
      border-top: none;
      padding-top: 0;
    }

    .blog-post-content {
      max-width: 1000px;
      margin: 3rem auto 6rem;
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }

    .blog-segment {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      margin-bottom: 0;
    }

    .blog-segment .blog-text {
      width: 100%;
      max-width: 800px;
    }

    .blog-segment .blog-image {
      width: 100%;
      max-width: 800px;
      display: flex;
      justify-content: center;
    }

    .blog-segment .blog-image img {
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
    }

    .blog-segment.reverse {
      flex-direction: column;
    }

    .blog-text h2 {
      font-size: 2rem;
      color: var(--primary-green);
      margin-bottom: 1.5rem;
      font-family: 'Playfair Display', serif;
    }

    .blog-text p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-muted);
      margin-bottom: 1.2rem;
    }

    .blog-text ul {
      margin-bottom: 1.2rem;
      padding-left: 1.5rem;
    }

    .blog-text li {
      margin-bottom: 0.75rem;
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.5;
    }

    .blog-image img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .blog-cta {
      text-align: center;
      background: #f8faf9;
      padding: 3rem;
      border-radius: 16px;
      border: 1px dashed var(--primary-green);
      margin-top: 2rem;
    }

    .cta-content h3 {
      font-size: 1.75rem;
      color: var(--primary-green);
      margin-bottom: 1rem;
    }

    .cta-content p {
      max-width: 600px;
      margin: 0 auto;
      font-size: 1.1rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .simulator-wrapper {
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius);
      overflow: hidden;
      background: white;
      box-shadow: var(--box-shadow);
      margin-top: 2rem;
    }

    .simulator-header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid #eee;
      background: #fafafa;
    }

    .simulator-header .small-caps {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--primary-green);
      font-weight: 700;
      display: block;
      margin-bottom: 0.5rem;
    }

    .simulator-header h3 {
      font-size: 1.5rem;
      margin: 0;
      color: var(--primary-green);
    }

    .optimizer-wrapper {
      margin-top: 4rem;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius);
      overflow: hidden;
      background: white;
      box-shadow: var(--box-shadow);
    }

    .optimizer-header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid #eee;
      background: #fdfdfd;
      text-align: center;
    }

    .optimizer-header .small-caps {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--primary-green);
      font-weight: 700;
      display: block;
      margin-bottom: 0.5rem;
    }

    .optimizer-header h2 {
      font-size: 2rem;
      margin: 0;
      color: var(--dark-slate);
    }

    .cta-button {
      padding: 1.25rem 3rem;
      font-size: 1.1rem;
      background-color: var(--primary-green);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 700;
      transition: var(--transition);
    }

    .cta-button:hover {
      background-color: #12351f;
      transform: translateY(-2px);
    }

    .secondary-button {
      padding: 1.25rem 3rem;
      font-size: 1.1rem;
      background: transparent;
      color: var(--dark-slate);
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 700;
      transition: var(--transition);
    }

    .secondary-button:hover {
      border-color: var(--dark-slate);
    }

    @media (max-width: 1024px) {
      .explanation-grid { grid-template-columns: 1fr; }
      h1 { font-size: 3rem; }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  protected reviews = [
    {
      author: 'Greg C.',
      date: '7/21/2025',
      quote: "I'm a PGA instructor and I been testing both products out with my clients and golf classes. When I was telling them that they are not aiming in the right spot and using the tools to show them, it was an eye-opener.",
    },
    {
      author: 'Jonathan S.',
      date: '6/24/2025',
      quote: "This has helped me tremendously with my club face alignment. Fantastic product and I'm glad I purchased this.",
    },
    {
      author: 'Javier D.',
      date: '9/4/2024',
      quote: "Recently purchased the drive align to help with aiming during practice. Sticks well to the driver face. Customer service at its finest!! Thank you!!!",
    },
    {
      author: 'David D.',
      date: '5/27/2025',
      quote: "I have had a similar product for use with irons (magnetic) and found that to be useful. Always wished that there was something that would work with my driver so I was glad when this popped up in my Instagram feed.",
    },
    {
      author: 'Seth H.',
      date: '7/28/2025',
      quote: "Really nice tool. Not too big either so it fits in the golf bag. Helped me realize how my setup was leading to my slice.",
    },
    {
      author: 'Joe C.',
      date: '8/14/2025',
      quote: "Great product, let's you see the difference a proper set up, verses having hands too high or too low.",
    }
  ];
  protected products = [
    { 
      title: 'Drive Align', 
      price: '$34.99', 
      // ... same as before
      rating: 5, 
      reviews: 34, 
      image: 'assets/images/drive_align.webp', 
      description: 'Approach the ball consistently and confidently every time.',
      url: 'https://gentlegatorgolf.com/products/drive-align' 
    },
    { 
      title: 'Iron Align', 
      price: '$34.99', 
      rating: 5, 
      reviews: 4, 
      image: 'assets/images/Iron_Align.webp', 
      description: 'Precision strikes from any lie on the course.',
      url: 'https://gentlegatorgolf.com/products/iron-align' 
    },
    { 
      title: 'Putt Align', 
      price: '$49.99', 
      rating: 5, 
      reviews: 4, 
      image: 'assets/images/putt-align.webp', 
      description: 'The final touch for a perfect round of golf.',
      url: 'https://gentlegatorgolf.com/products/test-copy' 
    },
  ];
}
