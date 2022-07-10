import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, FilterPipe, DurationFormatPipe, OrderByPipe],
      providers: [CoursesServiceService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the list of courses form service', () => {
    const courseService = TestBed.inject(CoursesServiceService);
    component.ngOnInit();
    expect(component.courses).toBe(courseService.courses);
  });

  it('should delete the course from the array', () => {
    component.ngOnInit();
    const fistLength = component.courses.length;
    component.deleteCourse("ff24kg");
    const secondLength = component.courses.length;
    expect(fistLength-1).toBe(secondLength);
  });

  it('should display courses', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const courses = bannerElement.querySelector('.courses-box')!;
    expect(courses.children).toBeDefined();
  });

});
