import { Observable } from 'rxjs';

export interface IBaseHttpService<TEntity> {
    getList(objFilter?: any): Observable<TEntity[]>;
    getOne(id: number): Observable<TEntity>;
    insert(account: TEntity): Observable<TEntity>;
    update(account: TEntity): Observable<TEntity>;
    delete(id: number): Observable<any>;
}