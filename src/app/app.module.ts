import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faKey, faUser, faEnvelope, faSpinner, faPalette } from '@fortawesome/free-solid-svg-icons';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { AppRoutingModule } from './app-routing.module';
import { FinancesAccountModule } from './modules/finances-account/finances-account.module';

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
    //ThirdPartyModules
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      maxOpened: 1,
      countDuplicates: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
      autoDismiss: true,
      timeOut: 5000,
    }),
    //Project modules
    CoreModule,
    FinancesAccountModule,
    HomeModule,
    ShoppingModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faKey);
    library.addIcons(faUser);
    library.addIcons(faEnvelope);
    library.addIcons(faSpinner);
    library.addIcons(faPalette);
  }
}