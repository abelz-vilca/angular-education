import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo/ejemplo.component';
import { PEMFIComponent } from './PE/pemfi/pemfi.component';
import { Profe01Component } from './PerfilTeacher/mfi/profe01/profe01.component';
import { Profe02Component } from './PerfilTeacher/mfi/profe02/profe02.component';

import { CsfComponent } from './teacher/csf/csf.component';
import { DocentesComponent } from './teacher/docentes/docentes.component';
import { IleComponent } from './teacher/ile/ile.component';
import { LelComponent } from './teacher/lel/lel.component';
import { MfiComponent } from './teacher/mfi/mfi.component';


const routes: Routes = [
  {path: 'programa-Matemática-Física-e-Informática', component: PEMFIComponent},
  {path: 'plana-Docente/:docente-cargo/:cargo', component:DocentesComponent},
  {path: 'Docente-Matemática-Física-e-Informática', component: MfiComponent},
  {path: 'Docente-Ingles-lengua-Española', component: IleComponent},
  {path: 'Docente-Ciencias-Socieales-Filosofía', component: CsfComponent},
  {path: 'Docente-Lengua-Española-Literatura', component: LelComponent},
  {path: 'Docente-Matemática-Física-e-Informática/:id', component: Profe01Component},
  //
  {path: 'prueba/:programas-estudio/:id_especialidad', component: Profe02Component},
//PROBANDO CAUSIÑA
{path: 'ejemplo', component: EjemploComponent},

];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'}),
  ],
 exports: [RouterModule]


})
export class AppRoutingModule { }