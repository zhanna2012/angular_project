import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { DurationFormatPipe } from './pipes/duration-format.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CoursesServiceService } from 'src/services/courses/courses-service.service';

import { AppComponent } from './app.component';
import { IfAuthDirective } from './directives/if-auth.directive';
import { AuthService } from 'src/services/user/auth.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseCardComponent,
    CourseBorderDirective,
    LogoComponent,
    FooterComponent,
    DurationFormatPipe,
    FilterPipe,
    OrderByPipe,
    LoginComponent,
    IfAuthDirective,
    AddCourseComponent,
    EditCourseComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/courses", pathMatch: 'full'},
      {path: "courses", component: CoursesComponent},
      {path: "courses/new", component: AddCourseComponent},
      {path: "courses/:id", component: EditCourseComponent},
      {path: "login", component: LoginComponent},
      {path: "**", component: NotFoundComponent},
    ])

  ],
  providers: [CoursesServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
