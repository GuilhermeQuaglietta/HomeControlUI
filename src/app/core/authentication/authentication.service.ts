import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './login/login';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  jwtString = '';
  isAuthenticated = false;
  authChangeEmitter: Observable<boolean>;
  private authChangeListener: Subject<boolean>;

  // private baseUrl = "https://localhost:3200/AccessControl/"
  private baseUrl = "https://localhost:44383/"
  private loginUrl = this.baseUrl + "api/v1/login"

  constructor(private client: HttpClient) {
    this.authChangeListener = new Subject<boolean>();
    this.authChangeEmitter = this.authChangeListener.asObservable();
  }

  login(login: ILogin): Observable<string> {
    return this.client.post(this.loginUrl, login, {
      withCredentials: true,
    }).pipe(
      map((response: string) => {
        this.isAuthenticated = true;
        this.authChangeListener.next(true);
        this.jwtString = response;
        return response;
      })
    );
  }

  logoff() {
    this.isAuthenticated = false;
    this.authChangeListener.next(false);
  }
}