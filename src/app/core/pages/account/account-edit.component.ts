import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAccount, AccountEditResolverResult } from './account';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from './account.service';
import { ToastrService } from 'ngx-toastr';
import { HttpStatusCode } from 'src/app/core/enums/HttpStatusCode';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
})
export class AccountEditComponent implements OnInit {

  account: IAccount;
  submitting = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    const resolvedData: AccountEditResolverResult = this.route.snapshot.data["resolvedData"];

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

  private onSuccess(jwtString: IAccount) {
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
