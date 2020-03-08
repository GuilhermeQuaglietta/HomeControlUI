import { Component, OnInit } from '@angular/core';
import { FinancesAccountService } from './finances-account.service';
import { IFinancesAccount } from './finances-account';

@Component({
  selector: 'app-finances-account',
  templateUrl: './finances-account.component.html',
})
export class FinancesAccountComponent implements OnInit {

  accountList: IFinancesAccount[];

  constructor(private service: FinancesAccountService) { }

  ngOnInit() {
    this.service.getList().subscribe(accounts => {
      this.accountList = accounts;
    })
  }
}
