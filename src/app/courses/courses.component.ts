import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/app.component';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';

/* import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; */

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  ngOnInit(): void {
   //this._coursesService.getCourses();
    //this.loadCourses();
    this.courses = this._coursesService.getCourses();
    console.log(this._coursesService.getCourses());
   }
  searchValue: string = "Type seacrh value";
  //apiURL = 'http://localhost:4000';


  constructor(private _coursesService : CoursesServiceService) {
    //this.loadCourses();
  }

  loadMore() {
    console.log("load more");
  }

  courses: Course[] = [];
  coursesApi: any = {};


  searchHandler(value: any) : void {
    this.searchValue = value;
  } 

  getSeacrhValue(value: string) : void {
    console.log("Seacrh value:" + this.searchValue);
    this.searchValue = value;
  }

  trachById(index: any, course: { id: number | string; }) {
     return course.id;
   }

  deleteCourse(courseID: string) {
    console.log("Course id: ", courseID);
    if(window.confirm("Are you sure you want to delete this video course?")) {
      this._coursesService.deleteCourse(courseID);
      this.courses = this._coursesService.getCourses();
    }
  }

  
  // Get courses list
 /*  loadCourses() {
      return this._coursesService.getDataCourse().subscribe((data: {}) => {
      this.coursesApi = data;
      const dates = this.coursesApi.result.map((item: any) => {
        return new Date(item.creationDate);
      })
      const result = this.coursesApi.result.map((obj: any, i: string | number) => ({ ...obj, creationDate: dates[i] }));
      this.courses = result;
    }); 
  }
 */
    
  }


  


