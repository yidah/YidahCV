import { Component, Input } from '@angular/core';

 import { ISkill } from '../skill';

@Component({
    selector: 'p-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.css']
})
export class ProgressBarComponent  {  
    @Input() skills: ISkill[];    
    errorMessage: string;

}







