import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { IJwtUser } from '../../functions/jsonWebToken.functions';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
})
export class AccountIndexComponent implements OnInit {

  loggedInUser: IJwtUser
  constructor(private authService: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.removeLoggedInUser();
    this.router.navigateByUrl('login');
  }
}