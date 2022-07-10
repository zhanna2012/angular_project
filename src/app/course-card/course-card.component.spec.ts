import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent, DurationFormatPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    const courseDe = fixture.debugElement.query(By.css('.card'));
    const courseEl = courseDe.nativeElement;

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

  it('should display title', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const title = cardElement.querySelector('.title')!;
    expect(title.textContent).toBe("NAME TAG");
  });

  it('should display description', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const description = cardElement.querySelector('.card__text')!;
    expect(description.textContent).toBe("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia pariatur eius id laboriosam dolores voluptate quas nam laborum, dicta debitis nemo libero? Vel totam quod possimus ab molestias explicabo eveniet!");
  });

  it('should display duration', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const duration = cardElement.querySelector('.duration')!;
    expect(duration.textContent).toBeDefined();
  });

  it('should display creation date', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const creationDate = cardElement.querySelector('.creationDate')!;
    expect(creationDate.textContent).toBeDefined();
  });

  it('check if edit button was clicked', () => {
    spyOn(component, 'editcourseHandler'); 
    let btn = fixture.debugElement.query(By.css('.editBtn'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.editcourseHandler).toHaveBeenCalled();
  });

  it('check if delete button was clicked', () => {
    spyOn(component, 'deleteCourse'); 
    let btn = fixture.debugElement.query(By.css('.deleteBtn'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.deleteCourse).toHaveBeenCalled();
  });
});
