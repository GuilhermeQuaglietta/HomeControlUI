import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { IAccount } from './account';
import { AuthorizationService } from '../../services/authorization.service';
import { IJwtUser } from '../../functions/jsonWebToken.functions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})

export class AccountComponent implements OnInit {
  User: IJwtUser;

  constructor(private authService: AuthorizationService) {
    this.authService.loginChangeEmitter.subscribe(loggedInUser => {
      this.User = loggedInUser;
    })
  }

  ngOnInit() {

  }
}
