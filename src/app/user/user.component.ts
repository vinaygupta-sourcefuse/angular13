import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log, warn } from 'console';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  ngOnInit(): void {
    console.log('user id is : ', this.route.snapshot.paramMap.get('id'));
    
  }

}
