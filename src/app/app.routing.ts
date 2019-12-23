import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/board/pages/user/user.component';
import { NotFoundComponent } from './core/pages/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { AccountEditComponent } from './modules/board/pages/account/account-edit.component';
import { AccountComponent } from './modules/board/pages/account/account.component';
import { ShoppingComponent } from './modules/board/pages/shopping/shopping.component';
import { AuthGuardService } from './core/guards/authguard.service';
import { LoginComponent } from './core/authentication/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuardService] },
    { path: 'shopping/new', component: ShoppingComponent, canActivate: [AuthGuardService] },
    { path: 'shopping/edit', component: ShoppingComponent, canActivate: [AuthGuardService] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
    { path: 'account/new', component: AccountEditComponent, canActivate: [AuthGuardService] },
    { path: 'user', component: UserComponent },
    { path: 'user/new', component: UserComponent },
    { path: 'user/edit', component: UserComponent },
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
