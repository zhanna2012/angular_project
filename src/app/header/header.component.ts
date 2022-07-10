import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';
import { AuthService } from 'src/services/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routePath: string = "";
  curID: string = "";
  id: string | null = "";
  title: string = "";
  

  constructor(private _authService : AuthService, private _coursesService : CoursesServiceService,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url === "/courses/new") {
          this.routePath = "/ New Course"
        } else if(event.url === "/courses") {
          this.routePath = "";
        } else {
           const curURL = event.url.split('/')[2];
           const currentCourse = this._coursesService.getById(curURL);
           this.routePath = `/ ${currentCourse.title}`;
        }
      }
    })
    

  }

  userName: string = this._authService.getUserInfo().firstName;

  logout() {
    this._authService.logout();
    this.userName = this._authService.getUserInfo().firstName;
  }

  ngOnInit(): void {
    this.userName = this._authService.getUserInfo().firstName;
  }

}
