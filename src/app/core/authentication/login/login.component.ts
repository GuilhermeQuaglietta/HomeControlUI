import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ILogin } from './login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }


  login() {
    let login = <ILogin>{
      userName: this.userName,
      password: this.password
    };

    console.log("login");

    this.service.login(login);

  }
}
