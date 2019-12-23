import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './core/pages/notfound/notfound.component';
import { UserComponent } from './modules/board/pages/user/user.component';
import { CoreModule } from './core/core.module';
import { BoardModule } from './modules/board/board.module';
import { Routing } from './app.routing';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    //system modules
    CoreModule,
    HomeModule,
    BoardModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
