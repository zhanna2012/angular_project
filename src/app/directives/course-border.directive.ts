import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {

  @Input('appCourseBorder')
  date!: Date;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const dateBefore = new Date();
    dateBefore.setDate(dateBefore.getDate()-14);
    if(this.date.getTime() < new Date().getTime() 
    && this.date.getTime() >= dateBefore.getTime()) {
      this.el.nativeElement.style.setProperty('border', '2px solid lightgreen');
    } else if(this.date.getTime() > new Date().getTime()) {
      this.el.nativeElement.style.setProperty('border', '2px solid blue');
    }
  }
  

  
}
