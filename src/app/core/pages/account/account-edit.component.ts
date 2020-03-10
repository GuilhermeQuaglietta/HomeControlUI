import { Component, OnInit } from '@angular/core';
import { IJwtUser } from '../../functions/jsonWebToken.functions';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
})
export class AccountEditComponent implements OnInit {
  User: IJwtUser;

  constructor(private authService: AuthorizationService) {
    this.authService.loginChangeEmitter.subscribe(loggedInUser => {
      this.User = Object.assign({}, loggedInUser);
    })
  }

  ngOnInit() {

  }
}
