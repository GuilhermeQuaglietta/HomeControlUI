import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HomeControlUI';

  constructor(private authService: AuthenticationService) {
  }
  logout() {
    this.authService.logoff();
  }
}
