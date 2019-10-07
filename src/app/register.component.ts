import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  constructor( public authService: AuthService) {}
  registerData = {
    email:'',
    pwd: '',
    name: '',
    description: ''
  };
 
  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }
}
