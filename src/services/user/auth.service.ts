import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail: string = "";
  password: string = "";

  nameChange: Subject<string> = new Subject<string>();

  user: User = {
    id: "",
    firstName: "",
    lastName: ""
  }

  change(){
      this.nameChange.next(this.user.firstName);
  }

  login(email : string, password: string) {
    console.log("Logged in successfully!");
    console.log("Email: " + email + " Password: " + password);
    this.userEmail = email;
    this.password = password;
    localStorage.setItem("token", "token");
    localStorage.setItem("id", "id");
    localStorage.setItem("firstName", "firstName");
    localStorage.setItem("lastName", "lastName");
    this.user = {
      id: "id",
      firstName: "firstName",
      lastName: "lastName"
    }

  }
  
  logout() {
    console.log("Logout: " + localStorage.getItem("firstName") + " " 
    + localStorage.getItem("lastName"));
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    this.user = {
      id: "",
      firstName: "",
      lastName: ""
    }
  }

  isAuth() : boolean{
    if(localStorage.getItem("token") === null || undefined || "") {
      return false;
    } else {
      return true;
    }
  }

  getUserInfo() : User{
    return this.user;
  }

  constructor() { }
}
