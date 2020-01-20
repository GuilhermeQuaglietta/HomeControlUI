import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './core/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'HomeControlUI';
  loggedIn = false;

  constructor(private authService: AuthorizationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.authService.loginChangeEmitter.subscribe(x => this.loggedIn = x);
  }

  logout() {
    this.authService.logOutUser();
    this.router.navigateByUrl('login');
  }
}
