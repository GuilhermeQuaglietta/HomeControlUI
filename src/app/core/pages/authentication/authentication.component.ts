import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {

  loginMode: boolean;
  emailMode: boolean;
  passwordMode: boolean;

  constructor(private client: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (this.router.url.indexOf('/login/recover') != -1) {
        if (params.keys.length > 0) {
          this.passwordMode = true;
        } else {
          this.emailMode = true;
        }
      } else {
        this.loginMode = true;
      }
    });
  }
}
