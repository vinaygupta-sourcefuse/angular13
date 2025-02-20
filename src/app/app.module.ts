import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RefElDirective } from './ref-el.directive';
import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { Router3Component } from './router3/router3.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChildComponent } from './child/child.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewChildComponent } from './view-child/view-child.component';
import { ProfileComponent } from './profile/profile.component';
// import { AdminModule } from './admin/admin.module';
// import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // child component
    RefElDirective, Router1Component, Router2Component, Router3Component, UserComponent, NoPageComponent, ChildComponent, Children1Component, Children2Component, ViewChildComponent, ProfileComponent // Directive 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AdminModule, // Since we are using lazy loading, we don't need to import the AdminModule in app.module.ts.
    // StudentModule  // similarly this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
