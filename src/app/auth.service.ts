import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable()
export class AuthService {
    path = environment.path +  '/auth';
    TOKEN_KEY = 'token';
    constructor( public httpClient: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
        this.httpClient.post<any>(this.path + '/register', registerData).subscribe(res => {
            this.saveToken(res.token)
        });
    }

    loginUser(loginData) {
        this.httpClient.post<any>(this.path + '/login', loginData).subscribe(res => {
            this.saveToken(res.token)
        });
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
}