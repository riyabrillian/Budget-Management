import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public userSource = new BehaviorSubject('thisss');
    userobs = this.userSource.asObservable();

    constructor() { }
    changeMessage(message: string) {
        this.userSource.next(message)
    }



}