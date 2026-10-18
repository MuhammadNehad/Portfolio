import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-heading',
    standalone: true,
    template: `
    <div class="mb-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {{ title }}
      </h2>
    </div>
  `,
})
export class SectionHeadingComponent {
    @Input({ required: true }) title = '';
    @Input() eyebrow = '';
}
