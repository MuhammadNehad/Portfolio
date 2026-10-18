import { Component, Input } from '@angular/core';
import type { ExperienceItem } from '../data/cv-data';
import { SectionHeadingComponent } from './section-heading.component';

@Component({
    selector: 'app-experience-section',
    standalone: true,
    imports: [SectionHeadingComponent],
    template: `
    <section class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
      <app-section-heading eyebrow="Experience" title="Career journey" />
      <div class="space-y-5">
        @for (experience of experiences; track experience.company + experience.period) {
          <article class="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
            <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 class="text-xl font-semibold text-white">{{ experience.title }}</h3>
                <p class="mt-1 text-base font-medium text-cyan-200">{{ experience.company }}</p>
              </div>
              <span class="text-sm text-slate-400">{{ experience.period }}</span>
            </div>
            <ul class="mt-4 space-y-2 text-base leading-7 text-slate-300">
              @for (item of experience.description; track item) {
                <li class="flex gap-3">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
    @Input() experiences: ExperienceItem[] = [];
}
