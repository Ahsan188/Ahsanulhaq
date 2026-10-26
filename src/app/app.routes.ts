
import { Routes } from '@angular/router';

import { About } from './page/about/about';
import { Skill } from './page/skill/skill';
import { Education } from './page/education/education';
import { Project } from './page/project/project';
import { ContactUs } from './page/contact-us/contact-us';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'skill', component: Skill },
  { path: 'education', component: Education },
  { path: 'project', component: Project },
  { path: 'contact', component: ContactUs },
  { path: '**', redirectTo: 'about' }
];
