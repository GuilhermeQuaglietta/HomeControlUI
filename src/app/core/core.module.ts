import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { RecoverLoginComponent } from './authentication/login/recover-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ErrorComponent,
    RecoverLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

    NotFoundComponent,
    ErrorComponent,
    LoginComponent,
  ]
})

export class CoreModule { }