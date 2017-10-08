import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProgressBarComponent } from './shared/progress-bar.component';

import { SkillsService } from './skills.service';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'education', component:EducationComponent},
      { path: 'experience', component:ExperienceComponent},
      { path: '', redirectTo:'experience', pathMatch:'full'},
      { path: '**', redirectTo:'experience', pathMatch: 'full'}
    ])
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
