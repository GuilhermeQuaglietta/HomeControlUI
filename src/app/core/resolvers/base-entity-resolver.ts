import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpStatusCode } from 'src/app/core/enums/HttpStatusCode';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseHttpService } from '../services/http/base-http-service';
import { IHttpResolverResult } from './resolver-entity';

@Injectable({
    providedIn: 'root'
})
export class BaseEntityResolver<TEntity> implements Resolve<IHttpResolverResult<TEntity>>{

    constructor(private service: BaseHttpService<TEntity>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHttpResolverResult<TEntity>> {
        const id = route.paramMap.get('id');

        let result: IHttpResolverResult<TEntity>;

        if (id === undefined || id === null) {
            //Abre a pagina com um registro em branco
            result = { content: null, httpStatusCode: HttpStatusCode.Ok };
            return of(result);
        } else if (isNaN(+id)) {
            //Retorna a pagina sem produto selecionado
            result = { content: null, httpStatusCode: HttpStatusCode.BadRequest, errorMessage: `Codigo de produto inválido: ${id}` };
            return of(result);
        }

        return this.service.getFirst(+id)
            .pipe(
                map((entity: TEntity) => {
                    result = { content: entity, httpStatusCode: HttpStatusCode.Ok };
                    return result;
                }),
                catchError((error: HttpErrorResponse) => (of({ content: null, httpStatusCode: error.status, error })))
            );

    }

}