import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesAccountRoutingModule } from './finances-account-routing.module';
import { FinancesAccountEditComponent } from './finances-account-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FinancesAccountListComponent } from './finances-account-list.component';
import { FinancesAccountComponent } from './finances-account.component';



@NgModule({
  declarations: [
    FinancesAccountListComponent,
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
