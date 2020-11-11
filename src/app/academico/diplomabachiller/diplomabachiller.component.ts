import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-diplomabachiller',
  templateUrl: './diplomabachiller.component.html',
  styleUrls: ['./diplomabachiller.component.css']
})
export class DiplomabachillerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  opentramitedoc() {
    this.router.navigate(['informacion']);
   

 }
}
