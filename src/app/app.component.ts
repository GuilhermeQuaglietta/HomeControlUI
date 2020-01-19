import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'HomeControlUI';
  loggedIn = false;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.authChangeEmitter.subscribe(x => this.loggedIn = x);
  }

  logout() {
    this.authService.logoff();
  }
}
