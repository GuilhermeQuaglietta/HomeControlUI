import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Router } from '@angular/router';
import { IJwtUser } from 'src/app/core/functions/jsonWebToken.functions';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
})
export class UserMenuComponent implements OnInit {
  currentUser: IJwtUser;

  constructor(
    private authService: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
    this.authService.loginChangeEmitter.subscribe(
      user => user !== undefined ? this.onUserLogIn(user) : this.onUserLogOut()
    );
  }

  private onUserLogIn(user: IJwtUser) {
    this.currentUser = user;
  }
  private onUserLogOut() {
    delete this.currentUser;
  }

  logout() {
    this.authService.removeLoggedInUser();
    this.router.navigateByUrl('login');
  }
}
