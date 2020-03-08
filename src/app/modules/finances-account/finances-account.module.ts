import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesAccountRoutingModule } from './finances-account-routing.module';
import { FinancesAccountIndexComponent } from './finances-account-index.component';
import { FinancesAccountComponent } from './finances-account.component';
import { FinancesAccountEditComponent } from './finances-account-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FinancesAccountIndexComponent,
    FinancesAccountComponent,
    FinancesAccountEditComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    FinancesAccountRoutingModule,
  ]
})
export class FinancesAccountModule { }
