import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SITE } from './shared/site';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="nav">
      <div class="wrap nav-inner">
        <a routerLink="/" class="brand" (click)="open.set(false)">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 29 10.5v11L16 29 3 21.5v-11z" fill="#2f9a7d"/><path d="M16 3 29 10.5 16 18 3 10.5z" fill="var(--saffron)"/><path d="M16 18v11L3 21.5v-11z" fill="#143f35"/></svg>
          {{ site.name }}
        </a>
        <button class="menu" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Menu">{{ open() ? '✕' : '☰' }}</button>
        <nav [class.show]="open()" (click)="open.set(false)">
          <a routerLink="/" fragment="how">How it works</a>
          <a routerLink="/" fragment="work">Our work</a>
          <a routerLink="/" fragment="pricing">Pricing</a>
          <a routerLink="/" fragment="faq">FAQ</a>
          <a routerLink="/" fragment="contact" class="btn btn-glow btn-small">Get a quote</a>
        </nav>
      </div>
    </header>
    <main><router-outlet /></main>
    <footer class="footer iso-grid">
      <div class="wrap foot">
        <div class="foot-brand">
          <strong class="brand">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 29 10.5v11L16 29 3 21.5v-11z" fill="#2f9a7d"/><path d="M16 3 29 10.5 16 18 3 10.5z" fill="var(--saffron)"/><path d="M16 18v11L3 21.5v-11z" fill="#143f35"/></svg>
            {{ site.name }}
          </strong>
          <p>{{ site.tagline }}</p>
        </div>
        <div class="foot-col">
          <h4>Explore</h4>
          <a routerLink="/" fragment="how">How it works</a>
          <a routerLink="/work/pradeep-residence">Sample house</a>
          <a routerLink="/" fragment="pricing">Pricing</a>
        </div>
        <div class="foot-col">
          <h4>Contact</h4>
          <span>{{ site.phone }}</span>
          <a [href]="'mailto:' + site.email">{{ site.email }}</a>
          <span>{{ site.city }}</span>
        </div>
        <p class="small">© {{ year }} {{ site.name }}. Sample model shown with the owner's permission.</p>
      </div>
    </footer>
  `,
  styles: [`
    .nav{position:sticky;top:0;z-index:30;height:var(--nav-h);background:rgba(9,22,18,.82);backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid var(--night-line)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;height:100%}
    .brand{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:800;font-size:1.2rem;color:#fff;text-decoration:none;letter-spacing:-.01em}
    .brand svg{width:30px;height:30px}
    nav{display:flex;align-items:center;gap:32px}
    nav a{color:var(--on-night-muted);text-decoration:none;font-weight:500;font-size:.95rem;transition:color .2s}
    nav a:not(.btn):hover{color:#fff}
    nav a.btn{color:#2b1d05}
    .menu{display:none;background:none;border:1px solid var(--night-line);border-radius:10px;width:42px;height:42px;font-size:1.1rem;color:#fff;cursor:pointer}
    .footer{background:var(--night);color:var(--on-night-muted);padding-block:72px 36px}
    .foot{display:grid;grid-template-columns:minmax(0,2fr) repeat(2,minmax(0,1fr));gap:40px}
    .foot-brand p{margin-top:14px;max-width:24em;font-size:1.05rem}
    .foot-col{display:flex;flex-direction:column;gap:10px;font-size:.95rem}
    .foot-col h4{margin:0 0 6px;font:500 .75rem var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--saffron)}
    .foot-col a{color:var(--on-night);text-decoration:none}
    .foot-col a:hover{color:#fff;text-decoration:underline}
    .small{grid-column:1/-1;font-size:.82rem;padding-top:28px;border-top:1px solid var(--night-line)}
    @media (max-width:860px){
      .menu{display:block}
      nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:var(--night);border-bottom:1px solid var(--night-line);padding:8px 20px 20px}
      nav.show{display:flex}
      nav a{padding:14px 0;border-bottom:1px solid var(--night-line)}
      nav a.btn{margin-top:14px;border:0}
      .foot{grid-template-columns:1fr 1fr}.foot-brand{grid-column:1/-1}
    }
  `],
})
export class AppComponent {
  site = SITE;
  year = new Date().getFullYear();
  open = signal(false);
}
