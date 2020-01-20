import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RecoverEmailComponent } from './pages/authentication/recover/recover-email.component';
import { RecoverPasswordComponent } from './pages/authentication/recover/recover-password.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RecoverEmailComponent,
    RecoverPasswordComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    ErrorComponent,
    LoginComponent,
  ]
})

export class CoreModule { }