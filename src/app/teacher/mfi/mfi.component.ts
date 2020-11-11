import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { DocenteService } from '..//.//../services/docente/docente.service';


@Component({
  selector: 'app-mfi',
  templateUrl: './mfi.component.html',
  styleUrls: ['./mfi.component.css']


})
export class MfiComponent implements OnInit {
  docentes: any;
  constructor(private router: Router,
    
    public docenteService: DocenteService,) {
   
   
  }

  ngOnInit(): void {
    this.docenteService.getAllDocentes().subscribe(resp => {
      this.docentes = resp;
      console.log(resp)
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
  openprofe01() {
    this.router.navigate(['Perfil-Docente']);
  }
  opendocente() {
    this.router.navigate(['plana-Docente']);
   
  
  }
  openprueba(){
    this.router.navigate(['prueba']);
  }
}
