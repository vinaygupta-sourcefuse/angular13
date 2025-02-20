import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-content',
  template: `
    <h3>LifeCycleContent Component</h3>
    <ng-content></ng-content>
  `
})
export class LifecycleContentComponent implements AfterContentInit {
  @ContentChild('projectedContent') content!: ElementRef; // Getting projected content

  ngAfterContentInit() {
    console.log('%c[ngAfterContentInit] Content Child Accessed:', 'color: teal', this.content);
    this.content.nativeElement.style.color = 'red'; // Modify projected content
  }
}
