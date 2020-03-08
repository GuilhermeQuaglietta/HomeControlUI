import { IHttpResolverResult } from 'src/app/core/interfaces/http-resolver-result.interface';

export interface IAccount {
    accountId: number;
    title: string;
    ownerId: number;
    highlightColor: string;
}

export interface AccountEditResolverResult extends IHttpResolverResult<IAccount> {

}