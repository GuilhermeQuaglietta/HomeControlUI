import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private jwtString = '';

  loginChangeEmitter: Observable<boolean>;
  private loginChangeListener: Subject<boolean>;

  private _isAuthenticated = false;
  public get isAuthenticated(): boolean { return this._isAuthenticated; }

  constructor() {
    this.loginChangeListener = new Subject<boolean>();
    this.loginChangeEmitter = this.loginChangeListener.asObservable();
  }

  logInUser(jwtString: string) {
    this._isAuthenticated = true;
    this.loginChangeListener.next(this._isAuthenticated);
    this.jwtString = jwtString;
  }

  logOutUser() {
    this._isAuthenticated = false;
    this.loginChangeListener.next(this.isAuthenticated);
    this.jwtString = null;
  }
}