import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectToQueryString } from 'src/app/core/functions/objectFunctions';
import { IBaseHttpService } from './http-interface';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService<TEntity> implements IBaseHttpService<TEntity> {

    protected baseUrl: string;
    protected mainUri: string;
    protected WithCredentials: boolean;
    protected defaultHeaders: HttpHeaders;

    constructor(protected client: HttpClient) { }

    getList(objFilter?: any): Observable<TEntity[]> {
        let queryFilter = '';
        if (objFilter !== undefined) {
            queryFilter = "?" + ObjectToQueryString(objFilter);
        }
        return this.client.get<TEntity[]>(this.mainUri + queryFilter, {
            withCredentials: false,
            headers: this.defaultHeaders,
        });
    }
    getFirst(id: any): Observable<TEntity> {
        return this.client.get<TEntity>(this.mainUri + `/${id}`, {
            withCredentials: false,
            headers: this.defaultHeaders,
        });
    }
    insert(account: TEntity): Observable<TEntity> {
        return this.client.post<TEntity>(this.mainUri, account, {
            withCredentials: false,
            headers: this.defaultHeaders,
        });
    }
    update(account: TEntity): Observable<TEntity> {
        return this.client.put<TEntity>(this.mainUri, account, {
            withCredentials: false,
            headers: this.defaultHeaders,
        });
    }
    delete(id: number): Observable<any> {
        return this.client.delete(this.mainUri + `/${id}`, {
            withCredentials: false,
            headers: this.defaultHeaders,
        });
    }
}
