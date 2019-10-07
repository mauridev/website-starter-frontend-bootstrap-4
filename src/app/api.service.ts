import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable()
export class ApiService {
    public messages;
    public users;
    path = environment.path;
    constructor( public httpClient: HttpClient) {}

    getMessages(userId) {
        this.httpClient.get<any>(this.path + '/posts/' + userId).subscribe(res => {
            console.log(res);
            this.messages = res;
        });
    }

    postMessages(message) {
        this.httpClient.post(this.path + '/post', message, {responseType: 'text'}).subscribe(res => {
        });
    }

    getUsers() {
        this.httpClient.get<any>(this.path + '/users').subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }

    getProfile(id) {
        return this.httpClient.get(this.path + '/profile/' + id)
    }
}
