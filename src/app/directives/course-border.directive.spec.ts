import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from '../course-card/course-card.component';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';
import { CourseBorderDirective } from './course-border.directive';

describe('CourseBorderDirective', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent, CourseBorderDirective, DurationFormatPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
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

    component.course = expectedCourse;

    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have blue border', () => {
    const mainEl: HTMLElement = fixture.nativeElement;
    const card = mainEl.querySelector('.card')!;
    expect(getComputedStyle(card).borderColor).toEqual("rgb(0, 0, 255)");
  });
});
