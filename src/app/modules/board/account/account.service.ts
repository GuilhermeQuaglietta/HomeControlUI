import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from './account';
import { ObjectToQueryString } from 'src/app/core/functions/objectFunctions';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "https://localhost:44311/";
  private mainUri = this.baseUrl + "api/v1/account";

  constructor(private client: HttpClient) { }

  getList(objFilter?: any): Observable<IAccount[]> {
    let queryFilter: string;
    if (objFilter !== undefined) {
      const queryFilter = "?" + ObjectToQueryString(objFilter);
    }
    return this.client.get<IAccount[]>(this.mainUri + queryFilter);
  }
  getOne(id: number): Observable<IAccount> {
    return this.client.get<IAccount>(this.mainUri + `\${id}`);
  }
}
