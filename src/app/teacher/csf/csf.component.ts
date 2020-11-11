import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-csf',
  templateUrl: './csf.component.html',
  styleUrls: ['./csf.component.css']
})
export class CsfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openmfi() {
    this.router.navigate(['Docente-Matemática-Física-e-Informática']);
   

 }
 openile() {
  this.router.navigate(['Docente-Ingles-lengua-Española']);
}
opencsf() {
  this.router.navigate(['Docente-Ciencias-Socieales-Filosofía']);
}
openlel() {
  this.router.navigate(['Docente-Lengua-Española-Literatura']);
}
 opendocente() {
  this.router.navigate(['plana-Docente']);
 

}
}
