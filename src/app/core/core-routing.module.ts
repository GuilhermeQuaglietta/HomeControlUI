import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './pages/account/account-edit.component';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { LoginCreateComponent } from './pages/login/login-create.component';
import { LoginRecoverEmailComponent } from './pages/login/login-recover-email.component';
import { LoginRecoverPasswordComponent } from './pages/login/login-recover-password.component';
import { AuthenticatedGuard } from './guards/authenticated-guard';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { LoginIndexComponent } from './pages/login/login-index.component';
import { AccountIndexComponent } from './pages/account/account-index.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountChangePasswordComponent } from './pages/account/account-change-password.component';
import { AccountEditResolver } from '../modules/finances-account/finances-account-edit-resolver.service';

const routes: Routes = [
    {
        path: 'login',
        component: LoginIndexComponent,
        canActivate: [NotAuthenticatedGuard],
        children: [
            { path: 'create', component: LoginCreateComponent, canActivate: [NotAuthenticatedGuard] },
            { path: 'recover', component: LoginRecoverEmailComponent, canActivate: [NotAuthenticatedGuard] },
            { path: 'recover/:recoveryKey', component: LoginRecoverPasswordComponent, canActivate: [NotAuthenticatedGuard] },
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: '**', component: NotFoundComponent },
        ]
    },
    {
        path: 'account',
        component: AccountIndexComponent,
        canActivate: [AuthenticatedGuard],
        children: [
            { path: 'account/edit', component: AccountEditComponent, canActivate: [AuthenticatedGuard] },
            { path: 'account/changepassword', component: AccountChangePasswordComponent, canActivate: [AuthenticatedGuard] },
            { path: '', component: AccountComponent, canActivate: [AuthenticatedGuard] }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class CoreRoutingModule { }