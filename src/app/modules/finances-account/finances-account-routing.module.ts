import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancesAccountIndexComponent } from './finances-account-index.component';
import { NotFoundComponent } from 'src/app/core/pages/notfound/notfound.component';
import { AuthenticatedGuard } from 'src/app/core/guards/authenticated-guard';
import { FinancesAccountComponent } from './finances-account.component';
import { FinancesAccountEditComponent } from './finances-account-edit.component';

const routes: Routes = [
    {
        path: 'financesaccount',
        component: FinancesAccountIndexComponent,
        canActivate: [AuthenticatedGuard],
        children: [
            { path: ':id', component: FinancesAccountEditComponent, canActivate: [AuthenticatedGuard] },
            { path: '', component: FinancesAccountComponent, pathMatch: 'full' },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class FinancesAccountRoutingModule { }