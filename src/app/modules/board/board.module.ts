import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { CoreModule } from 'src/app/core/core.module';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AccountEditComponent } from './account/account-edit.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    UserComponent,
    AccountEditComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ]
})
export class BoardModule { }