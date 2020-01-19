import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ILogin } from './login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData: ILogin = {
    email: "",
    password: ""
  };
  submitting = false;
  loginErrorMessage: string;
  loginSuccessMessage: string;

  constructor(private service: AuthenticationService,
    private toastr: ToastrService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;
    
    this.service.login(this.loginData).subscribe(
      next => this.onLoginSuccess(),
      (error: HttpErrorResponse) => this.onLoginFailure(error)
    );
  }

  private onLoginSuccess() {
    this.loginSuccessMessage = "Login realizado com sucesso! Redirecionando...";
    setTimeout(function () { return; }, 2000);
    this.router.navigateByUrl('/home');
  }

  private onLoginFailure(error: HttpErrorResponse): void {
    if (error.status === 401) {
      this.loginErrorMessage = "Credenciais inválidas";
    } else {
      this.loginErrorMessage = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
    }
    this.submitting = false;
  }
}
