import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  template: `
            <div *ngFor="let message of apiService.messages">
              <div>{{message.msg}}</div>
            </div>
            `
})
export class MessageComponent implements OnInit {
  constructor( public apiService: ApiService, public route: ActivatedRoute) {}

  ngOnInit() {
    var userId = this.route.snapshot.params.id
    this.apiService.getMessages(userId);
  }

}
