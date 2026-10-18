import { Component, Input } from '@angular/core';
import type { SkillGroup } from '../data/cv-data';
import { SectionHeadingComponent } from './section-heading.component';

@Component({
    selector: 'app-skills-section',
    standalone: true,
    imports: [SectionHeadingComponent],
    template: `
    <section class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
      <app-section-heading eyebrow="Skills" title="Technical capabilities" />
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        @for (skillGroup of skills; track skillGroup.category) {
          <div class="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <h3 class="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {{ skillGroup.category }}
            </h3>
            <ul class="space-y-2 text-sm text-slate-300">
              @for (item of skillGroup.items; track item) {
                <li class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  {{ item }}
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
    @Input() skills: SkillGroup[] = [];
}
