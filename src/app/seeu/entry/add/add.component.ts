import { SeeuService } from './../../services/seeu.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public seeuService: SeeuService) { }

  ngOnInit() {
    this.seeuService.getUses();
    this.seeuService.getDisiciplinesOfUse();
  }

}
