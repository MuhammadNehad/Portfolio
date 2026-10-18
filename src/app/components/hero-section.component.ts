import { Component, Input } from '@angular/core';
import type { PortfolioProfile } from '../data/cv-data';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    template: `
    <section class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-lg sm:p-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_30%)]"></div>
      <div class="relative grid gap-8 xl:grid-cols-[1.6fr_0.9fr] xl:items-center">
        <div>
          <span class="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
            Available for opportunities
          </span>

          <div class="mt-6 space-y-4">
            <p class="text-sm font-medium uppercase tracking-[0.28em] text-slate-300">
              {{ profile.headline }}
            </p>
            <h1 class="text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl">
              {{ profile.name }}
            </h1>
            <p class="text-xl font-semibold text-cyan-300 sm:text-2xl">
              {{ profile.role }}
            </p>
          </div>

          <p class="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            {{ profile.summary }}
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              class="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              [href]="'mailto:' + profile.contact.email"
            >
              Email Me
            </a>
            <a
              class="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              [href]="'tel:' + profile.contact.phone"
            >
              Call Me
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-cyan-400"></span>
              {{ profile.contact.location }}
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-violet-400"></span>
              {{ profile.contact.phone }}
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              {{ profile.contact.email }}
            </span>
          </div>
        </div>

        <div class="rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Quick profile
          </p>
          <div class="mt-5 space-y-5">
            <div>
              <p class="text-sm text-slate-400">Experience</p>
              <p class="mt-1 text-2xl font-bold text-white">5+ years</p>
            </div>
            <div>
              <p class="text-sm text-slate-400">Core focus</p>
              <p class="mt-1 text-xl font-semibold text-cyan-200">Angular & .NET solutions</p>
            </div>
            <div>
              <p class="text-sm text-slate-400">LinkedIn</p>
              <a class="mt-1 inline-block text-base font-medium text-violet-300 underline decoration-violet-400/70 underline-offset-4" [href]="profile.contact.linkedin" target="_blank" rel="noreferrer">
                muhammad-nehad-baa4a6163
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
    @Input({ required: true }) profile!: PortfolioProfile;
}
