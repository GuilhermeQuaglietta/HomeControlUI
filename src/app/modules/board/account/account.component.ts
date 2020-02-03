import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { IAccount } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {

  accountList: IAccount[];

  constructor(private service: AccountService) { }

  ngOnInit() {
    this.service.getList().subscribe(accounts => {
      this.accountList = accounts;
    })

  }
}
