import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { Router3Component } from './router3/router3.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChildComponent } from './child/child.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';


const routes: Routes = [
  {path : 'router1', component : Router1Component},
  {path : 'router2', component : Router2Component},
  {path : 'router3', component : Router3Component},
  {path : 'child', component : ChildComponent, 
    children : [ 
      {path : 'children1', component : Children1Component},
      {path : 'children2', component: Children2Component}
    ]},
  {path : 'user/:id', component: UserComponent},
  {path : '**', component : NoPageComponent}  // it must need to in the last line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
