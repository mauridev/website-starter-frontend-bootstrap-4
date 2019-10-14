import { SeeuService } from './../services/seeu.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(public seeuService: SeeuService) { }

  ngOnInit() {
    let a = this.seeuService.getTerms();
    console.log(a);
  }

}
