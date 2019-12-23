import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = "https://localhost:44311/";
  private listUrl = "api/v1/account";

  constructor(private client: HttpClient) { }

  GetAccounts(): Observable<IAccount[]> {
    let obs = this.client.get<IAccount[]>(this.accountUrl + this.listUrl);
    return obs;
  }
}
