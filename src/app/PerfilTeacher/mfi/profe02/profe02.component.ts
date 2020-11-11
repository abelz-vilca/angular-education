import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from '..//../../services/docente/docente.service';
import { EspecialidadesService } from '..//..//..//services/especialidades/especialidades.service';
@Component({
  selector: 'app-profe02',
  templateUrl: './profe02.component.html',
  styleUrls: ['./profe02.component.css'],
})
export class Profe02Component implements OnInit {
  
  docente: Docente;
  especialidades: any;
  constructor(
    private router: Router,
    private ruta: ActivatedRoute,
    public docenteService: DocenteService,
    public especialidadesService: EspecialidadesService
  ) {}

  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      // console.log(params['id']);
     
      this.docenteporespecialidadid(params['id_especialidad']);
      console.log( params['id_especialidad'])
    });
    
    this.especialidadesService.getAllEspecialidades().subscribe(resp => {
      this.especialidades = resp;
    },
      error => { console.error(error) }
    );
      }
   docenteporespecialidadid(id_especialidad){
    this.docenteService.getAllDocenteByEspecialidad(id_especialidad).subscribe(
      (resp) => {
        this.docente = resp;
       
      },
      (error) => {
        console.error(error);
      }
    );
   }
}
