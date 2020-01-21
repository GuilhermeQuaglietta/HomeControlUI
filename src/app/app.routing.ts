import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './modules/home/home.component'
import { AuthenticatedGuard } from './core/guards/authenticated-guard'
import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard'
import { ShoppingComponent } from './modules/board/pages/shopping/shopping.component'
import { AccountComponent } from './modules/board/pages/account/account.component'
import { UserComponent } from './modules/board/pages/user/user.component'
import { NotFoundComponent } from './core/pages/notfound/notfound.component'
import { ModuleWithProviders } from '@angular/core'
import { AuthenticationComponent } from './core/pages/authentication/authentication.component'
import { LoginComponent } from './core/pages/authentication/login/login.component'
import { RecoverEmailComponent } from './core/pages/authentication/recover/recover-email.component'
import { RecoverPasswordComponent } from './core/pages/authentication/recover/recover-password.component'
import { LoginCreateComponent } from './core/pages/authentication/login/login-create.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard] },
    {
        path: 'login', component: AuthenticationComponent, canActivate: [NotAuthenticatedGuard], children: [
            { path: '', component: LoginComponent, canActivate: [NotAuthenticatedGuard] },
            { path: 'create', component: LoginCreateComponent },
            { path: 'recover', component: RecoverEmailComponent, canActivate: [NotAuthenticatedGuard] },
            { path: 'recover/:recoveryKey', component: RecoverPasswordComponent, canActivate: [NotAuthenticatedGuard] },
        ]
    },
    // { path: 'login', component: AuthenticationComponent, canActivate: [NotAuthenticatedGuard] },
    // { path: 'login/recover', component: RecoverEmailComponent, canActivate: [NotAuthenticatedGuard] },
    // { path: 'login/recover/:recoveryKey', component: RecoverPasswordComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'shopping', component: ShoppingComponent, canActivate: [AuthenticatedGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthenticatedGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthenticatedGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)