import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

// Fades an element up into view the first time it scrolls on screen. Styles live in styles.css (.reveal / .in).
@Directive({ selector: '[appReveal]', standalone: true, host: { class: 'reveal' } })
export class RevealDirective implements OnInit, OnDestroy {
  /** Delay in ms, for staggering items in a grid. */
  appReveal = input<number | string>('');
  private el = inject(ElementRef<HTMLElement>);
  private io?: IntersectionObserver;

  ngOnInit(): void {
    const node: HTMLElement = this.el.nativeElement;
    const delay = Number(this.appReveal()) || 0;
    if (delay) node.style.transitionDelay = `${delay}ms`;
    if (typeof IntersectionObserver === 'undefined') { node.classList.add('in'); return; }
    this.io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { node.classList.add('in'); this.io?.disconnect(); }
    }, { rootMargin: '0px 0px -8% 0px' });
    this.io.observe(node);
  }

  ngOnDestroy(): void { this.io?.disconnect(); }
}
