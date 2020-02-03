import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './menu/top/top-menu.component';
import { BottomMenuComponent } from './menu/bottom-menu.component';
import { UserMenuComponent } from './menu/user-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HomeComponent,
        TopMenuComponent,
        BottomMenuComponent,
        UserMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [TopMenuComponent]
})

export class HomeModule { }

