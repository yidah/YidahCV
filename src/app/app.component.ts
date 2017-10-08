import { Component, OnInit } from '@angular/core';

import { ISkill } from './skill';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; 
  errorMessage: string;
  techSkills: ISkill[];
  lanSkills: ISkill[];

  constructor(private _skillsService: SkillsService) {
    
        }
        ngOnInit(): void {
    
      
                        this._skillsService.getTechSkills()
                        .subscribe(skills => this.techSkills = skills,
                        error => this.errorMessage = <any>error);
    
                        this._skillsService.getLanSkills()
                        .subscribe(skills => this.lanSkills = skills,
                        error => this.errorMessage = <any>error);
        
        }
}
