import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string = this._authService.userEmail;
  password: string = this._authService.password;

  constructor(private _authService : AuthService) { }

  login(email: string, password: string) {
    this._authService.login(email, password);
    
  }

  emailHandler(value: any) : void {
    this.userEmail = value;
    console.log(value);
  } 

  passwordHandler(value: any) : void {
    this.password = value;
    console.log(value);
  } 

  ngOnInit(): void {

  }

}
