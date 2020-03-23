import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFinancesAccount } from './finances-account';
import { BaseHttpService } from 'src/app/core/services/http/base-http-service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FinancesAccountService extends BaseHttpService<IFinancesAccount>  {

  constructor(client: HttpClient, authService: AuthorizationService) {
    super(client)
    this.baseUrl = "https://localhost:44311/";
    this.mainUri = this.baseUrl + "api/v1/account";

    authService.loginChangeEmitter.subscribe(x => {
      this.defaultHeaders = new HttpHeaders({
        'Authorization': x.Token
      })
    });
  }
}
