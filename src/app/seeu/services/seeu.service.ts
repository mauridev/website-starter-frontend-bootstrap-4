import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SeeuService {
    path = environment.path + '/seeu';
    public terms;

    constructor( public httpClient: HttpClient) {}

    getTerms() {
        this.httpClient.get<any>(this.path + '/entries').subscribe(res => {
            this.terms = res;
        });
    }
}
