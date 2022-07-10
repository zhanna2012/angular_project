import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';
import * as uuid from 'uuid';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string = "";
  description: string = "";
  duration: number = 0;
  date: Date = new Date();
  author: string = "";

  constructor(private _coursesService : CoursesServiceService, private router: Router) { }

  titleHandler(value: any) : void {
    this.title = value;
    console.log(value);
  } 

  cancelHandler() : void {
    this.router.navigate(["/courses"]);
  }
  saveHandler(): void {
     if(this.title === "" || this.description === "" || this.duration === 0 || this.author === "") {
      alert("Invalid field");
    } else { 
    const newCourse = {
      id: uuid.v4(),
      title: this.title,
      description: this.description,
      duration: this.duration,
      creationDate: new Date(this.date),
      authors: [this.author],
      topRated: false
    }
    this._coursesService.createCourse(newCourse);
    console.log(this._coursesService.getCourses());
    this.router.navigate(["/courses"]);
  }
  
  }

  authorHandler(value: any) : void {
    this.author = value;
  } 

  descriptionHandler(value: any) : void {
    this.description = value;
  } 
  dateHandler(value: any) : void {
    this.date = value;
  } 

  durationHandler(value: any) : void {
    this.duration = value;
  } 

  ngOnInit(): void {
  }

}
