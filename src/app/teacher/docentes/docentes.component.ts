import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';

import { DocenteService } from '..//..//services/docente/docente.service';
import { EspecialidadesService } from '..//..//services//especialidades/especialidades.service';
@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  docentess: Docente;
  docentep: Docente;
  especialidades: any;
  constructor(private router: Router,
    private ruta: ActivatedRoute,
    public docenteService: DocenteService,
    public especialidadesService: EspecialidadesService) { }

  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      // console.log(params['id']);
      
      this.docenteporcargo(params['cargo']);
    });
    
        this.especialidadesService.getAllEspecialidades().subscribe(resp => {
      this.especialidades = resp;
    },
      error => { console.error(error) }
    );
  }

  docenteporcargo(cargo){
      this.docenteService.findByCargo(cargo).subscribe(
        (resp) => {

          this.docentess = resp;
         
        },
        (error) => {
          console.error(error);
        }
      );
      }
      // docenteporespecialidadid(id_especialidad){
      //   this.docenteService.getAllDocenteByEspecialidad(id_especialidad).subscribe(
      //     (resp) => {
      //       this.docentep = resp;
           
      //     },
      //     (error) => {
      //       console.error(error);
      //     }
      //   );
      //  }

     
    
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
