import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;
  private loginUrl = "http://localhost:51302/api/v1/login"

  constructor(private client: HttpClient) { }


  login(login: ILogin) {
    var obs = this.client.post(this.loginUrl, login);
    obs.subscribe(data => {
      console.log(data)
      if (data !== '') {
        this.isAuthenticated = true;
      }
    });
    return obs
  }
  logoff() {
    this.isAuthenticated = false;
  }
}
