import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin, IChangePassword, ILoginCreate } from './authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = "https://localhost:44383/"
  private loginUrl = this.baseUrl + "api/v1/login"
  private loginCreateUrl = this.baseUrl + "api/v1/user"
  private recoverUrl = this.baseUrl + "api/v1/login/recover"

  constructor(private client: HttpClient) { }

  login(login: ILogin): Observable<any> {
    return this.client.post(this.loginUrl, login, {
      withCredentials: true,
    });
  }

  loginCreate(login: ILoginCreate): Observable<any> {
    return this.client.post(this.loginCreateUrl, login, {
      withCredentials: true,
    });
  }

  sendRecoveryEmail(email: string): Observable<any> {
    return this.client.post(this.recoverUrl, JSON.stringify(email), {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    });
  }

  validateRecoveryKey(recoveryKey: string): Observable<any> {
    return this.client.get(this.recoverUrl + "/" + recoveryKey, {
      withCredentials: true,
    });
  }

  changePassword(recoverInfo: IChangePassword) {
    return this.client.put(this.recoverUrl, recoverInfo, {
      withCredentials: true,
    });
  }
}
