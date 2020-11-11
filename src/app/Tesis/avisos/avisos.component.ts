import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  opentesis() {
    this.router.navigate(['avisos']);
  }

}
