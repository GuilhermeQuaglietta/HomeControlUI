import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFinancesAccount } from './finances-account';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FinancesAccountService } from './finances-account.service';
import { ToastrService } from 'ngx-toastr';
import { BaseEntityResolver } from 'src/app/core/resolvers/base-entity-resolver';
import { IBaseHttpService } from 'src/app/core/services/http/http-interface';
import { IHttpResolverResult } from 'src/app/core/resolvers/resolver-entity';
import { HttpStatusCode } from 'src/app/core/enums/HttpStatusCode';

@Component({
  selector: 'app-finances-account-edit',
  templateUrl: './finances-account-edit.component.html',
})
export class FinancesAccountEditComponent implements OnInit {

  account: IFinancesAccount;
  submitting = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: FinancesAccountService,
    private toastr: ToastrService
  ) {
    this.account = { accountId: 0, title: '', highlightColor: "000000", ownerId: 0 }

    this.route.paramMap.subscribe(
      params => {
        let id = +params.get("id");
        if (id === undefined) return;

      });
  }

  ngOnInit() {
    const resolvedData: IHttpResolverResult<IFinancesAccount> = this.route.snapshot.data["resolvedData"];

    if (resolvedData.httpStatusCode == HttpStatusCode.Ok) {
      resolvedData.content.highlightColor = resolvedData.content.highlightColor.trim()
      this.account = resolvedData.content;
    }
    else {
      this.router.navigateByUrl('contas');
      this.toastr.error("Conta não encontrada");
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;

    this.accountService.insert(this.account).subscribe(
      next => this.onSuccess(next),
      error => this.onFailure(error)
    );
  }

  private onSuccess(jwtString: IFinancesAccount) {
    this.toastr.success("Conta criada com sucesso!");
    this.errorMessage = null;
    setTimeout(() => {
      this.router.navigateByUrl('account');
    }, 1000)
  }

  private onFailure(error: HttpErrorResponse): void {

    switch (error.status) {
      case 422:
        this.errorMessage = "Dados inválidos para criação de conta";
        break;
      case 400:
        this.errorMessage = "Operação inválida para criação de conta";
        break;
      case 401:
      case 403:
        this.errorMessage = "Operação inválida para criação de conta";
        break;
      default:
        this.errorMessage = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
        break;
    }
    this.submitting = false;
  }
}
