import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEditComponent } from './pages/account/account-edit.component';
import { AccountComponent } from './pages/account/account.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { CoreModule } from 'src/app/core/core.module';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountEditComponent,
    ShoppingComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class BoardModule { }