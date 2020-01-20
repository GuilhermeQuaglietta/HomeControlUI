import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from 'src/app/modules/board/pages/account/account.component';
import { AccountEditComponent } from 'src/app/modules/board/pages/account/account-edit.component';
import { ShoppingComponent } from 'src/app/modules/board/pages/shopping/shopping.component';
import { UserComponent } from 'src/app/modules/board/pages/user/user.component';
import { CoreModule } from 'src/app/core/core.module';


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