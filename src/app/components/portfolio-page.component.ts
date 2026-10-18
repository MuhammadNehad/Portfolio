import { Component, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { HeroSectionComponent } from './hero-section.component';
import { SectionHeadingComponent } from './section-heading.component';
import { SkillsSectionComponent } from './skills-section.component';
import { ExperienceSectionComponent } from './experience-section.component';
import { ProjectsSectionComponent } from './projects-section.component';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    imports: [
        HeroSectionComponent,
        SectionHeadingComponent,
        SkillsSectionComponent,
        ExperienceSectionComponent,
        ProjectsSectionComponent,
    ],
    template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <app-hero-section [profile]="profile()" />

        <main class="mt-8 space-y-10 pb-16">
          <section class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
              <app-section-heading eyebrow="Profile" title="Professional summary" />
              <p class="text-base leading-8 text-slate-300">
                {{ profile().professionalSummary }}
              </p>
            </div>

            <div class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
              <app-section-heading eyebrow="Stack" title="Technology stack" />
              <div class="flex flex-wrap gap-2.5">
                @for (skill of profile().technicalSkills; track skill) {
                  <span class="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-100">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          </section>

          <app-skills-section [skills]="profile().skillGroups" />
          <app-experience-section [experiences]="profile().experience" />
          <app-projects-section [projects]="profile().projects" />

          <section class="grid gap-6 lg:grid-cols-2">
            <div class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
              <app-section-heading eyebrow="Education" title="Academic background" />
              @for (item of profile().education; track item.school) {
                <div class="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <p class="text-lg font-semibold text-white">{{ item.degree }}</p>
                  <p class="mt-1 text-cyan-200">{{ item.school }}</p>
                  <p class="mt-2 text-sm text-slate-400">{{ item.period }}</p>
                </div>
              }
            </div>

            <div class="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
              <app-section-heading eyebrow="Languages" title="Communication" />
              <div class="flex flex-wrap gap-2.5">
                @for (language of profile().languages; track language) {
                  <span class="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100">
                    {{ language }}
                  </span>
                }
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  `,
})
export class PortfolioPageComponent {
    private readonly cvService = inject(CvService);
    readonly profile = this.cvService.profile;
}
