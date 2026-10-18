import { Component, Input } from '@angular/core';
import type { ProjectItem } from '../data/cv-data';
import { SectionHeadingComponent } from './section-heading.component';

@Component({
    selector: 'app-projects-section',
    standalone: true,
    imports: [SectionHeadingComponent],
    template: `
    <section class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
      <app-section-heading eyebrow="Projects" title="Selected work" />
      <div class="grid gap-5 lg:grid-cols-2">
        @for (project of projects; track project.name) {
          <article class="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
            <div class="mb-4 flex items-center justify-between gap-4">
              <h3 class="text-xl font-semibold text-white">{{ project.name }}</h3>
              <span class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                project
              </span>
            </div>
            <p class="text-sm leading-7 text-slate-300">{{ project.summary }}</p>
            <ul class="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              @for (item of project.bullets; track item) {
                <li class="flex gap-3">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
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
export class ProjectsSectionComponent {
    @Input() projects: ProjectItem[] = [];
}
