import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFinancesAccount } from './finances-account';
import { BaseHttpService } from 'src/app/core/services/http/base-http-service';

@Injectable({
  providedIn: 'root'
})
export class FinancesAccountService extends BaseHttpService<IFinancesAccount>  {

  constructor(client: HttpClient) {
    super(client)
    this.baseUrl = "https://localhost:44311/";
    this.mainUri = this.baseUrl + "api/v1/account";
  }
}
