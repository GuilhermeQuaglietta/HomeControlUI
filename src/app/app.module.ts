import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BoardModule } from './modules/board/board.module';
import { Routing } from './app.routing';
import { HomeModule } from './modules/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    //dependency modules
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      maxOpened: 1,
      countDuplicates: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
      autoDismiss: true,
      timeOut: 5000
    }),
    //custom modules
    CoreModule,
    HomeModule,
    BoardModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}