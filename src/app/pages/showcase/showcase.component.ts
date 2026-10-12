import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bar">
      <div class="wrap bar-inner">
        <div class="title">
          <a routerLink="/" fragment="work" class="back" aria-label="Back to our work">←</a>
          <div>
            <h1>Pradeep Residence</h1>
            <p>Varadharajapuram · 20' × 40' plot · G+1 with terrace · 1,708 sq.ft</p>
          </div>
        </div>
        <a class="btn btn-glow btn-small" routerLink="/" fragment="contact">Get one for your plan</a>
      </div>
    </div>
    <div class="viewer">
      <iframe src="models/pradeep-residence.html" title="Pradeep Residence interactive 3D model"></iframe>
    </div>
  `,
  styles: [`
    :host{display:flex;flex-direction:column;height:calc(100svh - var(--nav-h));min-height:560px;background:var(--night)}
    .bar{background:var(--night-2);border-bottom:1px solid var(--night-line);color:var(--on-night)}
    .bar-inner{display:flex;justify-content:space-between;align-items:center;gap:12px 20px;flex-wrap:wrap;padding-block:14px}
    .title{display:flex;align-items:center;gap:16px;min-width:0}
    .back{display:grid;place-items:center;flex:none;width:42px;height:42px;border-radius:50%;color:#fff;text-decoration:none;font-size:1.1rem;box-shadow:inset 0 0 0 1.5px var(--night-line);transition:background .2s}
    .back:hover{background:rgba(255,255,255,.08)}
    h1{font-size:clamp(1.25rem,2vw,1.6rem);color:#fff}
    p{font-size:.86rem;color:var(--on-night-muted);margin-top:2px}
    .viewer{flex:1;min-height:0}
    iframe{display:block;width:100%;height:100%;border:0}
  `],
})
export class ShowcaseComponent {}
