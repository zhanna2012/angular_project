import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appIfAuth]'
})
export class IfAuthDirective implements OnInit{

  constructor(private el: ElementRef<HTMLElement>, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") === null || undefined || "") {
      this.el.nativeElement.style.setProperty('display', 'none');
      this.router.navigate(["/login"]);
    } else {
      this.el.nativeElement.style.setProperty('display', 'flex');
    }
  }

}
