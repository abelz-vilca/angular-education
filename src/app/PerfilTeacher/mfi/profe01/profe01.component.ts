import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from '..//../../services/docente/docente.service';
@Component({
  selector: 'app-profe01',
  templateUrl: './profe01.component.html',
  styleUrls: ['./profe01.component.css']
})
export class Profe01Component implements OnInit {
  docente: Docente;
  constructor(private router: Router,
    private ruta: ActivatedRoute,
    public docenteService: DocenteService
    ) { }

  ngOnInit(): void {



    this.ruta.params.subscribe((params) => {
      // console.log(params['id']);
     
      this.docenteporid(params['id']);
    });
  }
  docenteporid(id){
    this.docenteService.findById(id).subscribe(
      (resp) => {
        this.docente = resp;
       
      },
      (error) => {
        console.error(error);
      }
    );
   }
  openmfi() {
    this.router.navigate(['Docente-Matemática-Física-e-Informática']);
   

 }
 opendocente() {
  this.router.navigate(['plana-Docente']);
 

}
}
