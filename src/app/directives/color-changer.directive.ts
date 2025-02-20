import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanger]' // Attribute selector
})
export class ColorChangerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.changeColor('blue'); // Change color on click
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
