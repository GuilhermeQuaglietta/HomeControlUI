import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './pages/account/account-edit.component';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { LoginCreateComponent } from './pages/login/login-create.component';
import { LoginRecoverEmailComponent } from './pages/login/login-recover-email.component';
import { LoginRecoverPasswordComponent } from './pages/login/login-recover-password.component';
import { AuthenticatedGuard } from './guards/authenticated-guard';
import { AccountEditResolver } from './pages/account/account-edit-resolver.service';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { LoginIndexComponent } from './pages/login/login-index.component';

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
        component: AccountEditComponent,
        canActivate: [AuthenticatedGuard],
        resolve: { resolvedData: AccountEditResolver },
        children: [
            { path: 'account/changepassword', component: AccountEditComponent, canActivate: [AuthenticatedGuard], resolve: { resolvedData: AccountEditResolver } },
            { path: '', component: AccountEditComponent, canActivate: [AuthenticatedGuard] }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class CoreRoutingModule { }