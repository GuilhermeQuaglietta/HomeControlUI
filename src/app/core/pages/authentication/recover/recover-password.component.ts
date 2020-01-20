import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { IChangePassword } from '../authentication';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
})
export class RecoverPasswordComponent implements OnInit {

  recoveryData: IChangePassword = {
    newPasswordConfirmation: null,
    newPassword: null,
    recoveryKey: null,
  };

  validatingKey: boolean;
  validatedKey: boolean;

  submitting: boolean;
  submitted: boolean;

  errorMessage: string;
  successMessage: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.validatingKey = true;
        this.recoveryData.recoveryKey = params.get("recoveryKey");
        this.authenticationService.validateRecoveryKey(this.recoveryData.recoveryKey).subscribe(
          () => {
            this.validatingKey = false;
            this.validatedKey = true;
          },
          error => {
            this.validatingKey = false;
            this.validatedKey = false;
            this.errorMessage = "Chave de recuperação expirou, por favor solicite uma nova";
          }
        );
      });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;
    this.authenticationService.changePassword(this.recoveryData).subscribe(
      next => this.onSuccess(),
      error => this.onFailure(error)
    );
  }
  private onSuccess() {
    this.successMessage = "Alteração de senha realizada com sucesso. Redirecionando para a tela de login...";
    this.errorMessage = null;
    this.submitting = false;
    this.submitted = true;

    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 2000)

  }

  private onFailure(error: HttpErrorResponse): void {
    this.errorMessage = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
    this.submitting = false;
    this.submitted = false;
  }
}
