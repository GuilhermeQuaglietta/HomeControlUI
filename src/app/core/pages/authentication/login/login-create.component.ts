import { Component, OnInit } from '@angular/core';
import { ILoginCreate } from '../authentication';
import { AuthenticationService } from '../authentication.service';
import { AuthorizationService } from 'src/app/core/authorization/authorization.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http/http';

@Component({
  templateUrl: './login-create.component.html',
})
export class LoginCreateComponent {

  loginCreateData: ILoginCreate = {
    Email: '',
    Name: '',
    Password: '',
    PasswordConfirmation: '',
  }

  submitting = false;
  errorMessage: string;
  successMessage: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;

    this.authenticationService.loginCreate(this.loginCreateData).subscribe(
      next => this.onSuccess(next),
      error => this.onFailure(error)
    );
  }

  private onSuccess(jwtString: string) {
    this.successMessage = "Login criado com sucesso! Redirecionando para a tela de login...";
    this.errorMessage = null;
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 2000)
  }

  private onFailure(error: HttpErrorResponse): void {

    switch (error.status) {
      case 422:
        this.errorMessage = "Dados inválidos para criação de login";
        console.log(error.error);
        break;

      case 400:
        this.errorMessage = "Operação inválida para criação de login";
        break;
      default:
        this.errorMessage = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
        break;
    }
    this.submitting = false;
  }

}
