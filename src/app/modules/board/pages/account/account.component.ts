import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { IAccount } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountList: IAccount[];

  constructor(private service: AccountService) { }

  ngOnInit() {
    this.service.GetAccounts().subscribe(accounts => {
      console.log(accounts);
      this.accountList = accounts;
    })

  }
}
