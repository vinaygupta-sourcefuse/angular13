import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { Router3Component } from './router3/router3.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path : 'router1', component : Router1Component},
  {path : 'router2', component : Router2Component},
  {path : 'router3', component : Router3Component},
  {path : 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
