import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile">
      <div class="header">
        <ng-content select=".profile-header"></ng-content>
      </div>
      <div class="body">
        <ng-content></ng-content>  <!-- Default slot -->
      </div>
      <div class="footer">
        <ng-content select=".profile-footer"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .profile { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
    .header { font-weight: bold; color: blue; }
    .footer { font-style: italic; color: gray; }
  `]
})
export class ProfileComponent {}
