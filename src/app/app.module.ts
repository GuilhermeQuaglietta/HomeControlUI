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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './core/authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    //dependency modules
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      maxOpened: 1,
      countDuplicates: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
      autoDismiss: true,
      timeOut: 5000
    }), // ToastrModule added
    //custom modules
    CoreModule,
    HomeModule,
    BoardModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
