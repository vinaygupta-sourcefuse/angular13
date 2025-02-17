import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRefEl]'
})
export class RefElDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.color = "red"
  }

}
