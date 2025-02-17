import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
@Input()item:string ='';

@Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
