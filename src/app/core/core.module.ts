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
import { LoginCreateComponent } from './pages/authentication/login/login-create.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faKey, faEnvelope, faUser, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    LoginCreateComponent,
    RecoverEmailComponent,
    RecoverPasswordComponent,
    NotFoundComponent,
    ErrorComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    NotFoundComponent,
    ErrorComponent,
    LoginComponent,
  ]
})

export class CoreModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faKey);
    library.addIcons(faUser);
    library.addIcons(faEnvelope);
    library.addIcons(faSpinner);
  }
}