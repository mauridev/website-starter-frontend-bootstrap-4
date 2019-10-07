import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-users',
  template: `
            <div *ngFor="let user of apiService.users">
                <div [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.name}}</div>
            </div>
            `
})
export class UsersComponent implements OnInit {
  constructor( public apiService: ApiService) {}

 ngOnInit() {
     this.apiService.getUsers()
 }

}
