import { 
  Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
  OnDestroy, ViewChild, ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <h3 #heading>Lifecycle Hooks in Angular</h3>
    <p>Message: {{ message }}</p>
    <button (click)="changeMessage()">Change Message</button>
  `,
})
export class LifecycleComponent 
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
             AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() message = 'Hello Angular!';
  @ViewChild('heading') heading!: ElementRef;

  constructor() {
    console.log('%cConstructor Called!', 'color: purple');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cngOnChanges Called!', 'color: orange', changes);
  }

  ngOnInit() {
    console.log('%cngOnInit Called!', 'color: green');
  }

  ngDoCheck() {
    console.log('%cngDoCheck Called!', 'color: blue');
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit Called!', 'color: teal');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked Called!', 'color: cyan');
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit Called!', 'color: magenta');
    this.heading.nativeElement.style.color = 'red';  // Modify DOM
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked Called!', 'color: brown');
  }

  ngOnDestroy() {
    console.log('%cngOnDestroy Called!', 'color: red');
  }

  changeMessage() {
    this.message = 'Message Changed!';
  }
}
