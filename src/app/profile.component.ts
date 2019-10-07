import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
        
                <h4>Profile</h4>
           
               
                    Name: {{ profile?.name }}
                    Email: {{ profile?.email }}
                    Description: {{ profile?.description }}
               
                <h4>Messages</h4>
            
            <app-messages></app-messages>
         
  `
})
export class ProfileComponent implements OnInit {
  constructor( public apiService: ApiService, public route: ActivatedRoute) {}
  
  profile

  ngOnInit() {
    var id = this.route.snapshot.params.id
    this.apiService.getProfile(id).subscribe(data => {
      this.profile = data
    })
  }
}
