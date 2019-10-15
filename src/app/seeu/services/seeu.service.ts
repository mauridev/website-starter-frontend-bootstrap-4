import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SeeuService {
    path = environment.path + '/seeu';
    public entries;
    public uses;

    constructor( public httpClient: HttpClient) {}

    getTerms() {
        this.httpClient.get<any>(this.path + '/entries').subscribe(res => {
            this.entries = res;
        });
    }

    getUses() {
        this.httpClient.get<any>(this.path + '/uses').subscribe(res => {
            this.uses = res;
        });
    }
}
