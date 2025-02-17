import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
  console.log('Username:', userForm.value.username);
  console.log('Email:', userForm.value.email);
  console.log('Password:', userForm.value.password);
}


// data to send in child (login) component 

data =10;
}

