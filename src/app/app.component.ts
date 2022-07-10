import { Component } from '@angular/core';

export interface Course {
  readonly id: string,
  title: string,
  creationDate: Date,
  duration: number,
  description: string
  topRated: boolean,
  authors: string[]
}

export interface User {
  readonly id: string,
  firstName: string,
  lastName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
