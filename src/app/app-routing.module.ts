import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './modules/home/home.component'
import { AuthenticatedGuard } from './core/guards/authenticated-guard'
import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard'
import { ShoppingComponent } from './modules/shopping/shopping.component'
import { NotFoundComponent } from './core/pages/notfound/notfound.component'
import { NgModule } from '@angular/core'

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard] },
    { path: 'shopping', component: ShoppingComponent, canActivate: [AuthenticatedGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
