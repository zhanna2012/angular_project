import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  curID: string = "";
  id: string | null = "";
  title: string = "";
  description: string = "";
  duration: number = 0;
  date: Date = new Date();
  author: string = "";
  authors: string[] = ["Author1", "Author2"];
  authorFlag = this.author === ""


  constructor(private _coursesService : CoursesServiceService, private router: Router,
    private route: ActivatedRoute) { }

  titleHandler(value: any) : void {
    this.title = value;
  } 

  cancelHandler() : void {
    this.router.navigate(["/courses"]);
  }
  saveHandler(): void {
    if(this.title === "" || this.description === "" || this.duration === 0 || this.author === "") {
      alert("Invalid field");
    } else { 
    const newCourse = {
      id: this.curID,
      title: this.title,
      description: this.description,
      duration: this.duration,
      creationDate: new Date(this.date),
      authors: [...this.authors, this.author],
      topRated: false
    }
    this._coursesService.createCourse(newCourse);
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
    this.route.paramMap
    .subscribe(param => {
      if(param.get('id') !== null) {
        this.id = param.get('id');
      }
      
    });
    this.curID = this.id !== null ? this.id : ""
    const currentCourse = this._coursesService.getById(this.curID);
    this.title = currentCourse.title;
    this.description = currentCourse.description;
    this.duration = currentCourse.duration;
    this.date = currentCourse.creationDate;
    this.authors = currentCourse.authors;
  }

}
