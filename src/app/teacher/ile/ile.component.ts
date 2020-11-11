import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from '..//..//services/docente/docente.service';
@Component({
  selector: 'app-ile',
  templateUrl: './ile.component.html',
  styleUrls: ['./ile.component.css']
})
export class IleComponent implements OnInit {
  docentes: any;
  constructor(private router: Router,
    public docenteService: DocenteService,) { }

  ngOnInit(): void {
    this.docenteService.getAllDocentes().subscribe(resp => {
      this.docentes = resp;
    },
      error => { console.error(error) }
    );
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
