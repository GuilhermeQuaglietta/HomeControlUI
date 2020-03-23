import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin, IChangePassword, ILoginCreate } from './login-entity';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private baseUrl = "https://localhost:44383/"
  private baseUrl = "https://localhost:3200/AccessControl/"
  private loginUrl = this.baseUrl + "api/v1/login"
  private loginCreateUrl = this.baseUrl + "api/v1/user"
  private recoverUrl = this.baseUrl + "api/v1/login/recover"

  constructor(private client: HttpClient, authService: AuthorizationService) { }

  login(login: ILogin): Observable<any> {
    return this.client.post(this.loginUrl, login, {
      withCredentials: false,
    });
  }

  create(login: ILoginCreate): Observable<any> {
    return this.client.post(this.loginCreateUrl, login, {
      withCredentials: false,
    });
  }

  recoverySendEmail(email: string): Observable<any> {
    return this.client.post(this.recoverUrl, JSON.stringify(email), {
      withCredentials: false,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    });
  }

  recoveryValidateKey(recoveryKey: string): Observable<any> {
    return this.client.get(this.recoverUrl + "/" + recoveryKey, {
      withCredentials: false,
    });
  }

  recoveryChangePassword(recoverInfo: IChangePassword) {
    return this.client.put(this.recoverUrl, recoverInfo, {
      withCredentials: false,
    });
  }
}
