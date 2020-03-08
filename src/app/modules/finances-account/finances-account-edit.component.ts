import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFinancesAccount } from './finances-account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finances-account-edit',
  templateUrl: './finances-account-edit.component.html',
})
export class FinancesAccountEditComponent implements OnInit {

  account: IFinancesAccount;

  constructor(private route: ActivatedRoute) {
    this.account = { accountId: 0, title: '', highlightColor: 0, ownerId: 0 }

    this.route.paramMap.subscribe(
      params => {
        let id = +params.get("id");
        if (id === undefined) return;

      });
  }

  ngOnInit() {

  }
}
