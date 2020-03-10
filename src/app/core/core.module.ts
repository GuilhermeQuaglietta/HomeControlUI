import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginRecoverEmailComponent } from './pages/login/login-recover-email.component';
import { LoginRecoverPasswordComponent } from './pages/login/login-recover-password.component';
import { AuthenticationComponent } from './pages/login/login-template.component';
import { LoginCreateComponent } from './pages/login/login-create.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './pages/test/test.component';
import { LoginIndexComponent } from './pages/login/login-index.component';
import { CoreRoutingModule } from './core-routing.module';
import { AccountEditComponent } from './pages/account/account-edit.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountChangePasswordComponent } from './pages/account/account-change-password.component';
import { AccountIndexComponent } from './pages/account/account-index.component';
import { AccountRoutingModule } from './pages/account/account-routing.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    LoginCreateComponent,
    LoginRecoverEmailComponent,
    LoginRecoverPasswordComponent,
    AccountComponent,
    AccountEditComponent,
    NotFoundComponent,
    ErrorComponent,
    TestComponent,
    LoginIndexComponent,
    AccountChangePasswordComponent,
    AccountIndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    CoreRoutingModule,
    AccountRoutingModule,
  ],
  exports: [
    NotFoundComponent,
    ErrorComponent,
    LoginComponent,
  ]
})
export class CoreModule { }