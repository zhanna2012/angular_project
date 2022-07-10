import { Injectable } from '@angular/core';
import { Course } from 'src/app/app.component';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { map, Observable, throwError } from 'rxjs';
//import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  //apiURL = 'http://localhost:4000';


 /*  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }; */

  courses: Course[] = [{
    id: "ff24kg",
    title: "Name tag",
    creationDate: new Date(2024, 5, 10),
    duration: 20,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia pariatur eius id laboriosam dolores voluptate quas nam laborum, dicta debitis nemo libero? Vel totam quod possimus ab molestias explicabo eveniet!",
    topRated: true,
    authors: [
      "author1",
      "author2"
    ]
  },
  {
    id: "3j76l",
    title: "Name tag 2",
    creationDate: new Date(2022, 6, 10),
    duration: 30,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia pariatur eius id laboriosam dolores voluptate quas nam laborum, dicta debitis nemo libero? Vel totam quod possimus ab molestias explicabo eveniet!",
    topRated: false,
    authors: [
      "author1",
      "author2"
    ]
  },
  {
    id: "j666k33",
    title: "Name tag 3",
    creationDate: new Date(2023, 3, 1),
    duration: 200,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia pariatur eius id laboriosam dolores voluptate quas nam laborum, dicta debitis nemo libero? Vel totam quod possimus ab molestias explicabo eveniet!",
    topRated: true,
    authors: [
      "author1",
      "author2"
    ]
  },
  {
    id: "fj893",
    title: "Name tag 4",
    creationDate: new Date(1988, 3, 1),
    duration: 10,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia pariatur eius id laboriosam dolores voluptate quas nam laborum, dicta debitis nemo libero? Vel totam quod possimus ab molestias explicabo eveniet!",
    topRated: true,
    authors: [
      "author1",
      "author2"
    ]
  }];

  
 
  constructor() {
    
   }
   
  /*  getDataCourse(): Observable<any> {
     return this.http
      .get<Course>(this.apiURL + '/courses/all')
      .pipe(retry(1), catchError(this.handleError));

  } */


  createCourse(course : Course) {
    this.courses.push(course);
  }

  getById(id : string) {
    return this.courses.filter(course => {
      if(course.id === id) {
        return course;
      }
      return 0;
    })[0];
  }

  updateItem(courseUpdate: Course) {
    const newList: any = this.courses.map(course => {
      if(course.id === courseUpdate.id) {
        return courseUpdate;
      } else {
        return course;
      }
    });
    this.courses = newList;
  }

  deleteCourse(courseID : string) {
    const newCourse = this.courses.filter(item => item.id !== courseID);
    this.courses = newCourse;
  }


  getCourses() {
    return this.courses;
  }

 /*  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  } */

}
