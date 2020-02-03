import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tokenStringToObject as claimsToObject, tokenToUser, IJwtUser, getTokenClaims } from '../functions/jsonWebToken.functions';
import { StorageService, JWTUSERKEY, JWTUSERSTRINGKEY } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private JwtUser: IJwtUser;

  loginChangeEmitter: Observable<IJwtUser>;
  private loginChangeListener: BehaviorSubject<IJwtUser>;

  public get isAuthenticated(): boolean {
    return this.JwtUser !== null && this.JwtUser !== undefined;
  }

  constructor(private storage: StorageService) {

    var currentUser = this.getUserFromStorage();
    if (currentUser !== null && currentUser !== undefined) {
      this.JwtUser = currentUser;
    }

    this.loginChangeListener = new BehaviorSubject<IJwtUser>(this.JwtUser);
    this.loginChangeEmitter = this.loginChangeListener.asObservable();
  }

  setLoggedInUser(jwtString: string) {
    const claims = getTokenClaims(jwtString);
    const claimsObject = claimsToObject(claims);
    this.JwtUser = tokenToUser(claimsObject);

    this.addUserToStorage(jwtString, this.JwtUser)
    this.loginChangeListener.next(this.JwtUser);
  }

  removeLoggedInUser() {
    delete this.JwtUser;
    this.removeUserFromStorage();
    this.loginChangeListener.next(this.JwtUser);
  }

  private addUserToStorage(jwtString: string, jwtUser: IJwtUser) {
    this.storage.set(JWTUSERSTRINGKEY, jwtString);
    this.storage.set(JWTUSERKEY, jwtUser);
  }

  private getUserFromStorage(): IJwtUser {
    return this.storage.get<IJwtUser>(JWTUSERKEY)
  }

  private removeUserFromStorage() {
    this.storage.remove(JWTUSERSTRINGKEY)
    this.storage.remove(JWTUSERKEY)
  }
}