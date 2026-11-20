import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, PROJECTS, SKILLS, STATS } from './portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  profile = PROFILE;
  stats = STATS;
  experience = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  education = EDUCATION;
  languages = LANGUAGES;
  year = new Date().getFullYear();
}
