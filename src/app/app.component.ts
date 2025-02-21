import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from './services/users-data.service';
import { ViewChildComponent } from './view-child/view-child.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  title = 'angular13-app-vinayg';
  count =0;
  name = 'vinay';
  disable = false;
  isLoggedIn = false;
  userRole = 'admin'
  isGuest = true

  items: string[] = ['item1', 'item2', 'item3'];
  matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  counter(type : string){
    type === 'add'? this.count++: this.count--;
  }

  submitted : boolean = true;

onSubmit(userForm: any) {
  this.submitted = true;
  console.log('Username:', userForm.username.value);
  console.log('Email:', userForm.value.email);
  console.log('Password:', userForm.value.password);
}


// data to send in child (login) component 

data ='this data is coming from Parent to child component';

// in this case, data will be sent by child to prarent component

dataStr :string=""
updateData(item : string){
  console.warn(item)
  this.data = item
}

logValue(item:any){
  console.log(item)
}


// Reactive Forms

loginForm = new FormGroup({
  user : new FormControl('',[Validators.required, Validators.email]),
  password : new FormControl('',[Validators.required, Validators.minLength(3)])
})
loginUser(){
  console.log(this.loginForm.value)
}
get userValidation(){
  return this.loginForm.get('user')
}
get passwordValidation(){
  return this.loginForm.get('password')
}

//get request
books: any[] = [];
constructor(private userData : UsersDataService){
  userData.books().subscribe((content: any) => {
    console.log("userData : ",content)
    this.books = content
  }) 
}

showLimit = 5;
showMore(){
  this.showLimit += 5;
}

//post request
addBook(bookForm : any){
  console.log(bookForm.value)
  this.userData.saveBooks(bookForm.value).subscribe((result) => console.log(result))
}

//Style binding

  isHighlighted = true;
  textColor = 'blue';

//Event binding
  message = 'Click the button!';
  
  onButtonClick() {
    this.message = 'Button Clicked!';
  }

//Two way binding
username = '';

//ngStyle directive
fontSize = 20;

  changeStyle() {
    this.textColor = 'red';
    this.fontSize = 25;
  }

//ngClass directive

isBold = false;

  toggleClass() {
    this.isHighlighted = !this.isHighlighted;
    this.isBold = !this.isBold;
  }


  @ViewChild(ViewChildComponent) child!: ViewChildComponent;
  messageData = '';

  ngAfterViewInit() {
    console.log(this.child.sayHello());  // Logs message from child
  }

  getChildMessage() {
    this.messageData = this.child.sayHello();
  }


  // Life Cycle hooks all in one place

  showComponent = true;
  parentMessage = 'Initial Message';

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }


  //Observables

  observData ='';
  ngOnInit() {
    // Create an Observable
    // const myObservable = new Observable<string>((observer) => {
    //   observer.next('Hello'); // Emit first value
    //   observer.next('from');
    //   observer.next('Observables!');
    //   observer.complete(); // Marks completion (no more data)
    // });

    // // Subscribe to the Observable
    // myObservable.subscribe({
    //   next: (value) => (this.observData += value + ' '), // Collect values
    //   complete: () => console.log('Observable completed!'),
    // });


  const myObservable = new Observable((observer) => {
    observer.next('Value 1');
    observer.next('Value 2');

    // Simulating an error
    observer.error('Something went wrong!');

    observer.next('Value 3'); // ❌ This will NOT be executed because of the error.
    observer.complete(); // ❌ Not executed because `error()` stops execution.
    });

    // Subscribing to the Observable
    myObservable.subscribe({
      next: (value) => console.log('Received:', value),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Observable Completed'),
    });
  }
}


