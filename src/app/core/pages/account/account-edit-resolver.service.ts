import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AccountService } from './account.service';
import { AccountEditResolverResult } from './account';
import { HttpStatusCode } from 'src/app/core/enums/HttpStatusCode';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountEditResolver implements Resolve<AccountEditResolverResult>{

    constructor(private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AccountEditResolverResult> {
        const id = route.paramMap.get('id');

        let result: AccountEditResolverResult;

        if (id === undefined || id === null) {
            //Abre a pagina com um registro em branco
            result = { content: { accountId: 0, title: '', highlightColor: '#000000', ownerId: 0 }, httpStatusCode: HttpStatusCode.Ok };
            return of(result);
        } else if (isNaN(+id)) {
            //Retorna a pagina sem produto selecionado
            result = { content: null, httpStatusCode: HttpStatusCode.BadRequest, errorMessage: `Codigo de produto inválido: ${id}` };
            return of(result);
        }

        return this.accountService.getOne(+id)
            .pipe(
                map(account => ({ content: account, httpStatusCode: HttpStatusCode.Ok })),
                catchError((error: HttpErrorResponse) => (of({ content: null, httpStatusCode: error.status, error })))
            );

    }

}