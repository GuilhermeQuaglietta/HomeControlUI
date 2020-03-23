import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/core/pages/notfound/notfound.component';
import { AuthenticatedGuard } from 'src/app/core/guards/authenticated-guard';
import { FinancesAccountEditComponent } from './finances-account-edit.component';
import { FinancesAccountComponent } from './finances-account.component';
import { FinancesAccountListComponent } from './finances-account-list.component';

const routes: Routes = [
    {
        path: 'financesaccount',
        component: FinancesAccountComponent,
        canActivate: [AuthenticatedGuard],
        children: [
            { path: '', component: FinancesAccountListComponent, pathMatch: 'full' },
            { path: ':id', component: FinancesAccountEditComponent, canActivate: [AuthenticatedGuard] },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class FinancesAccountRoutingModule { }