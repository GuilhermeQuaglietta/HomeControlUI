import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from './account';
import { ObjectToQueryString } from 'src/app/core/functions/objectFunctions';
import { IBaseHttpService } from '../../interfaces/base-http-service.interface';
import { BaseHttpService } from '../../services/base/base-http-service';

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
