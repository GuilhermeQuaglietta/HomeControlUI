import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorizationService } from '../../../authorization/authorization.service';
import { ILogin } from '../authentication';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginData: ILogin = {
    email: "",
    password: ""
  };
  submitting = false;
  errorMessage: string;
  successMessage: string;

  constructor(private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;

    this.authenticationService.login(this.loginData).subscribe(
      next => this.onLoginSuccess(next),
      error => this.onLoginFailure(error)
    );
  }

  private onLoginSuccess(jwtString: string) {
    this.successMessage = "Login realizado com sucesso! Redirecionando...";
    this.errorMessage = null;
    setTimeout(() => {
      this.authorizationService.logInUser(jwtString);
      this.router.navigateByUrl('home');
    }, 2000)
  }

  private onLoginFailure(error: HttpErrorResponse): void {
    this.errorMessage = error.status === 401 ?
      "Credenciais inválidas" :
      "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
    this.submitting = false;
  }
}
