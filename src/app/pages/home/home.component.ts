import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AUDIENCES, FAQ, PLANS, SITE, STEPS } from '../../shared/site';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  site = SITE;
  steps = STEPS;
  audiences = AUDIENCES;
  plans = PLANS;
  faq = FAQ;
  sent = signal(false);

  // Line icons for the audience cards, in the same order as AUDIENCES (24×24 stroke paths).
  audienceIcons = [
    'M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6',
    'M4 21V5l7-2v18M11 9h9v12M7 8h1M7 12h1M7 16h1M14 13h3M14 17h3M2 21h20',
    'M12 3v4M12 7l-6 14M12 7l6 14M8 16h8M12 7a2 2 0 1 0 0-.01',
  ];

  pradeep = {
    name: 'Pradeep Residence',
    place: 'Varadharajapuram',
    specs: [
      { k: 'Plot', v: "20' × 40'" },
      { k: 'Floors', v: 'G+1 + terrace' },
      { k: 'Built-up', v: '1,708 sq.ft' },
      { k: 'Rooms', v: '3 bed · 3 bath' },
    ],
  };

  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{10,15}$/)]],
    type: ['Homeowner'],
    floors: ['G+1'],
    message: [''],
  });


  get whatsappLink(): string {
    const v = this.form.getRawValue();
    const text = `Hi ${SITE.name}, I'm ${v.name} (${v.type}). I need a 3D view for a ${v.floors} plan. ${v.message}`.trim();
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    // TODO: send this to your email service or backend (e.g. Formspree, EmailJS or your own API).
    console.log('Quote request', this.form.getRawValue());
    this.sent.set(true);
  }
}
