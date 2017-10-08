import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISkill } from './skill';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SkillsService {

// this is a local url to my local json we just need to change here the url to a real one when needed
// pri

private _techSkillsUrl = 'assets/techSkills.json';
private _lanSkillsUrl = 'assets/lanSkills.json';

constructor(private _http: Http){

}

    getTechSkills(): Observable<ISkill[]> {
        return this._http.get(this._techSkillsUrl)
                            .map((response: Response) => <ISkill[]>response.json())
                            .do(data => console.log ('All: ' + JSON.stringify(data)))
                            .catch(this.handleError);
    }

    getLanSkills(): Observable<ISkill[]> {
        return this._http.get(this._lanSkillsUrl)
                            .map((response: Response) => <ISkill[]>response.json())
                            .do(data => console.log ('All: ' + JSON.stringify(data)))
                            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}