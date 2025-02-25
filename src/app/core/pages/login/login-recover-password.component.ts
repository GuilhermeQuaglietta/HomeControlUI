import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { IChangePassword } from './login-entity';

@Component({
  templateUrl: './login-recover-password.component.html',
})
export class LoginRecoverPasswordComponent implements OnInit {

  recoveryData: IChangePassword = {
    newPasswordConfirmation: null,
    newPassword: null,
    recoveryKey: null,
  };

  validatingKey: boolean;
  validatedKey: boolean;

  submitting: boolean;
  submitted: boolean;

  message: string;

  constructor(private authenticationService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.validatingKey = true;
        this.recoveryData.recoveryKey = params.get("recoveryKey");
        this.message = "Validando chave de recuperação...";

        this.authenticationService.recoveryValidateKey(this.recoveryData.recoveryKey).subscribe(
          () => {
            this.validatingKey = false;
            this.validatedKey = true;
            this.message = null;
          },
          error => {
            this.validatingKey = false;
            this.validatedKey = false;
            this.message = "Chave de recuperação expirou ou é inválida, por favor solicite uma nova";
          }
        );
      });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;
    this.authenticationService.recoveryChangePassword(this.recoveryData).subscribe(
      next => this.onSuccess(),
      error => this.onFailure(error)
    );
  }
  private onSuccess() {
    this.message = "Alteração de senha realizada com sucesso. Redirecionando para a tela de login...";
    this.submitting = false;
    this.submitted = true;

    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 2000)
  }

  private onFailure(error: HttpErrorResponse): void {
    this.message = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
    this.submitting = false;
    this.submitted = false;
  }
}
