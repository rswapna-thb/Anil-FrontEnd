import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Depart } from '../models/depart.model';
import { DpertService } from './dpert.service';


@Component({
  selector: 'app-adddepart',
  templateUrl: './adddepart.component.html',
  styleUrls: ['./adddepart.component.css']
})
export class AdddepartComponent implements OnInit {
  depart: Depart = new Depart();
  constructor(private router: Router, private dpertService: DpertService) { }

  ngOnInit() {
  }


  createUser(): void {

  this.dpertService.createUser(this.depart)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
