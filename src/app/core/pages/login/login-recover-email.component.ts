import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login-recover-email.component.html'
})
export class LoginRecoverEmailComponent implements OnInit {

  recoveryEmail: string = "";
  submitting = false;
  submitted = false;
  errorMessage: string;
  successMessage: string;

  constructor(private authenticationService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.submitting = true;
    this.authenticationService.recoverySendEmail(this.recoveryEmail).subscribe(
      next => this.onSuccess(next),
      error => this.onFailure(error)
    );
  }
  private onSuccess(recoverykey: string) {
    this.successMessage = "Serviço acionado com sucesso. Caso tenha digitado um e-mail válido, receberá seu e-mail de recuperação de senha em instantes";
    this.errorMessage = null;
    this.submitting = false;
    this.submitted = true;
  }

  private onFailure(error: HttpErrorResponse): void {
    this.errorMessage = "Estamos com problemas no serviço. \n Aguarde alguns instantes e tente novamente";
    this.submitting = false;
  }
}
