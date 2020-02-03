import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAccount } from './account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
})
export class AccountEditComponent implements OnInit {

  account: IAccount;

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
