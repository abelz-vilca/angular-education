import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tituloprofesional',
  templateUrl: './tituloprofesional.component.html',
  styleUrls: ['./tituloprofesional.component.css']
})
export class TituloprofesionalComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  opentramitedoc() {
    this.router.navigate(['informacion']);
   

 }
}
