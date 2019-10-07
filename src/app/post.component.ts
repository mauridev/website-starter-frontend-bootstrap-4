import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-post',
  template: `
            <div *ngIf="authService.isAuthenticated">
           
               
                    <h4>New Post</h4>
               
           
                <form>
                
                    <textarea [(ngModel)]="postMsg" name="description" matInput placeholder="Post Message"></textarea>
                
                <br>
                <button (click)="post()" mat-raised-button color="primary">Post</button>
                </form>
            
            </div>

            <div *ngIf="!authService.isAuthenticated">
           
                    <h4>You need to be authenticated to view this page</h4>
                
            </div>

            `
})
export class PostComponent {
  constructor( public apiService: ApiService, public authService: AuthService) {}
  postMsg = ''

  post() {
      this.apiService.postMessages({ msg: this.postMsg })
  }


}
