import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {

  @Input() titulo: string;

  constructor() {
  }

  ngOnInit() {
  }
}
