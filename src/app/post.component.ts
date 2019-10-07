import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-post',
  template: `
            <mat-card *ngIf="authService.isAuthenticated">
            <mat-card-header>
                <mat-card-title>
                    <h4>New Post</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form>
                <mat-form-field style="width: 100%">
                    <textarea [(ngModel)]="postMsg" name="description" matInput placeholder="Post Message"></textarea>
                </mat-form-field>
                <br>
                <button (click)="post()" mat-raised-button color="primary">Post</button>
                </form>
            </mat-card-content>
            </mat-card>

            <mat-card *ngIf="!authService.isAuthenticated">
            <mat-card-header>
                <mat-card-title>
                    <h4>You need to be authenticated to view this page</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
               
            </mat-card-content>
            </mat-card>

            `
})
export class PostComponent {
  constructor( public apiService: ApiService, public authService: AuthService) {}
  postMsg = ''

  post() {
      this.apiService.postMessages({ msg: this.postMsg })
  }


}
