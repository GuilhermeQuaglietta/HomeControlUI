import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AccountService } from '../../core/pages/account/account.service';
import { IAccount } from '../../core/pages/account/account';
import { HttpStatusCode } from 'src/app/core/enums/HttpStatusCode';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseEntityResolver } from 'src/app/core/resolvers/base-entity-resolver';
import { IFinancesAccount } from './finances-account';
import { IHttpResolverResult } from 'src/app/core/resolvers/resolver-entity';
import { FinancesAccountService } from './finances-account.service';

@Injectable({
    providedIn: 'root'
})
export class AccountEditResolver implements Resolve<IHttpResolverResult<IFinancesAccount>>{

    constructor(private service: FinancesAccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHttpResolverResult<IFinancesAccount>> {
        const id = route.paramMap.get('id');

        let result: IHttpResolverResult<IFinancesAccount>;

        if (id === undefined || id === null) {
            //Abre a pagina com um registro em branco
            result = { content: { accountId: 0, title: '', highlightColor: '#000000', ownerId: 0 }, httpStatusCode: HttpStatusCode.Ok };
            return of(result);
        } else if (isNaN(+id)) {
            //Retorna a pagina sem produto selecionado
            result = { content: null, httpStatusCode: HttpStatusCode.BadRequest, errorMessage: `Codigo de produto inválido: ${id}` };
            return of(result);
        }

        return this.service.getFirst(+id)
            .pipe(
                map(financesAccount => ({ content: financesAccount, httpStatusCode: HttpStatusCode.Ok })),
                catchError((error: HttpErrorResponse) => (of({ content: null, httpStatusCode: error.status, error })))
            );

    }

}