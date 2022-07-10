import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/app.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  @Input()
  index!: number;

  @Output() newItemEvent = new EventEmitter<string>();


 deleteCourse(value: string) {
    this.newItemEvent.emit(value);
  }
  editcourseHandler() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
