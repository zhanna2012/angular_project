import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { IfAuthDirective } from '../directives/if-auth.directive';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, IfAuthDirective ],
      imports: [
        RouterModule.forRoot([
          {path: "", redirectTo: "/courses", pathMatch: 'full'},
          {path: "courses", component: CoursesComponent},
          {path: "login", component: LoginComponent},
          {path: "**", component: NotFoundComponent},
        ])
    
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if logout button was clicked', () => {
    spyOn(component, 'logout'); 
    let btn = fixture.debugElement.query(By.css('.user__logout'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.logout).toHaveBeenCalled();
  });
  
});
