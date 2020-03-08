import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-login',
  templateUrl: './login-template.component.html',
})
export class AuthenticationComponent implements OnInit {

  @Input() titulo: string;

  constructor() {
  }

  ngOnInit() {
  }
}