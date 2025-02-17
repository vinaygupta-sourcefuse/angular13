import { Component } from '@angular/core';

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
  counter(type : string){
    type === 'add'? this.count++: this.count--;
  }
}
