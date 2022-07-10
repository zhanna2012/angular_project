import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';

import { EditCourseComponent } from './edit-course.component';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseComponent, DurationFormatPipe ],
      imports: [ RouterModule.forRoot([
        {path: "", redirectTo: "/courses", pathMatch: 'full'},
        {path: "courses", component: CoursesComponent},
        {path: "courses/:id", component: EditCourseComponent},
        {path: "**", component: NotFoundComponent},
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;

    const expectedCourse = {
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
    };

    component.id = expectedCourse.id;
    component.title = expectedCourse.title;
    component.date = expectedCourse.creationDate;
    component.duration = expectedCourse.duration;
    component.description = expectedCourse.description;
    component.authors = expectedCourse.authors;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
