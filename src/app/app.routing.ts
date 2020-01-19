import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/board/pages/user/user.component';
import { NotFoundComponent } from './core/pages/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { AccountEditComponent } from './modules/board/pages/account/account-edit.component';
import { AccountComponent } from './modules/board/pages/account/account.component';
import { ShoppingComponent } from './modules/board/pages/shopping/shopping.component';
import { AuthenticatedGuard as AuthenticatedGuard } from './core/guards/authenticated-guard';
import { LoginComponent } from './core/authentication/login/login.component';
import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NotAuthenticatedGuard]},
    { path: 'shopping', component: ShoppingComponent, canActivate: [AuthenticatedGuard] },
    { path: 'shopping/new', component: ShoppingComponent, canActivate: [AuthenticatedGuard] },
    { path: 'shopping/edit', component: ShoppingComponent, canActivate: [AuthenticatedGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthenticatedGuard] },
    { path: 'account/new', component: AccountEditComponent, canActivate: [AuthenticatedGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthenticatedGuard] },
    { path: 'user/new', component: UserComponent, canActivate: [AuthenticatedGuard] },
    { path: 'user/edit', component: UserComponent, canActivate: [AuthenticatedGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
