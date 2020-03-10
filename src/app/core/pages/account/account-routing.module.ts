import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/core/guards/authenticated-guard';
import { AccountIndexComponent } from './account-index.component';
import { AccountEditComponent } from './account-edit.component';
import { AccountComponent } from './account.component';
import { AccountChangePasswordComponent } from './account-change-password.component';

const routes: Routes = [
    {
        path: 'account',
        component: AccountIndexComponent,
        canActivate: [AuthenticatedGuard],
        children: [
            { path: 'edit', component: AccountEditComponent, canActivate: [AuthenticatedGuard] },
            { path: 'changepassword', component: AccountChangePasswordComponent, canActivate: [AuthenticatedGuard] },
            { path: '', component: AccountComponent, pathMatch: 'full' },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AccountRoutingModule { }