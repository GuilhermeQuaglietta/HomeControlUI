import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../../services/http/base-http-service';
import { IAccount } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseHttpService<IAccount> {
  constructor(client: HttpClient) {
    super(client);
    this.baseUrl = "https://localhost:44311/";
    this.mainUri = this.baseUrl + "api/v1/account";
  }
}
