import { Component, OnInit } from '@angular/core';
import { IJwtUser } from '../../functions/jsonWebToken.functions';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.component.html',
})
export class AccountChangePasswordComponent implements OnInit {
  User: IJwtUser;

  constructor(private authService: AuthorizationService) {
    this.authService.loginChangeEmitter.subscribe(loggedInUser => {
      this.User = loggedInUser;
    })
  }

  ngOnInit() {
  }

}
