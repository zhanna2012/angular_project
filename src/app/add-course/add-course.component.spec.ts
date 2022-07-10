import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';

import { AddCourseComponent } from './add-course.component';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseComponent, DurationFormatPipe
       ],
       imports: [RouterModule.forRoot([
        {path: "", redirectTo: "/courses", pathMatch: 'full'},
        {path: "courses", component: CoursesComponent},
        {path: "**", component: NotFoundComponent},
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
