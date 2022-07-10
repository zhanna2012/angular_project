import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterModule.forRoot([
          {path: "", redirectTo: "/courses", pathMatch: 'full'},
          {path: "courses", component: CoursesComponent},        
          {path: "**", component: NotFoundComponent}
        ])
    
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
