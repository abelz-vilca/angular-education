import { RouterModule, Routes } from '@angular/router';//importar rooute por defecto
import { FormsModule } from '@angular/forms'; //form
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//script cargar


//
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './@components/header/header.module';

import { CaracteristicasModule } from './@components/caracteristicas/caracteristicas.module';
import { InscribirseModule } from './@components/inscribirse/inscribirse.module';
import { CursosModule } from './@components/cursos/cursos.module';
import { LlamadaModule } from './@components/llamada/llamada.module';
import { EquipoModule } from './@components/equipo/equipo.module';
import { TestimoniosModule } from './@components/testimonios/testimonios.module';
import { EventosModule } from './@components/eventos/eventos.module';
import { HechosModule } from './@components/hechos/hechos.module';
import { FooterModule } from './@components/footer/footer.module';
import { HomeModule } from './@components/home/home.module';
import { InicioComponent } from './pages/inicio/inicio.component';

import { NoticiasComponent } from './@components/noticias/noticias.component';
import { PEMFIComponent } from './PE/pemfi/pemfi.component';
import { PEILEComponent } from './PE/peile/peile.component';
import { PECSFMTComponent } from './PE/pecsfmt/pecsfmt.component';
import { PELELMCComponent } from './PE/pelelmc/pelelmc.component';
import { IleComponent } from './teacher/ile/ile.component';
import { CsfComponent } from './teacher/csf/csf.component';
import { LelComponent } from './teacher/lel/lel.component';
import { MfiComponent } from './teacher/mfi/mfi.component';
import { RsdmfiComponent } from './RSU/rsdmfi/rsdmfi.component';
import { RsdileComponent } from './RSU/rsdile/rsdile.component';
import { RsdcsfComponent } from './RSU/rsdcsf/rsdcsf.component';
import { RsdlelComponent } from './RSU/rsdlel/rsdlel.component';
import { Profe01Component } from './PerfilTeacher/mfi/profe01/profe01.component';
import { Profe02Component } from './PerfilTeacher/mfi/profe02/profe02.component';
import { from } from 'rxjs';
import { AboutComponent } from './pages/about/about.component';
import { Responsabilidad01Component } from './RS/Docente/responsabilidad01/responsabilidad01.component';
import { Responsabilidad02Component } from './RS/Docente/responsabilidad02/responsabilidad02.component';
import { Social01Component } from './RS/Alumno/social01/social01.component';
import { Social02Component } from './RS/Alumno/social02/social02.component';
import { AvisosComponent } from './Tesis/avisos/avisos.component';
import { DiplomabachillerComponent } from './academico/diplomabachiller/diplomabachiller.component';
import { TituloprofesionalComponent } from './academico/tituloprofesional/tituloprofesional.component';
import { InformacionComponent } from './academico/informacion/informacion.component';

import { ContactComponent } from './pages/contact/contact.component';
import { HistoricalReviewComponent } from './pages/historical-review/historical-review.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { DocentesComponent } from './teacher/docentes/docentes.component';
import { EjemploComponent } from './ejemplo/ejemplo/ejemplo.component';



//declarar rutas
const routes: Routes = [

  {path: 'about', component: AboutComponent},
  // {path: 'programa-Matemática-Física-e-Informática', component: PEMFIComponent},
  {path: 'peile', component: PEILEComponent},
  {path: 'pecsfmt', component: PECSFMTComponent},
  {path: 'pelelmc', component: PELELMCComponent},
  /*Teachers*/
  
  
  //Responsabilidad Social
  {path: 'rsdmfi', component: RsdmfiComponent},
  {path: 'rsdile', component: RsdileComponent},
  {path: 'rsdcsf', component: RsdcsfComponent},
  {path: 'rsdlel', component: RsdlelComponent},

  //perfil de profes
  {path: 'Perfil-Docente', component: Profe01Component},
  {path: 'profe02', component: Profe02Component},

  //responsabilidad detalles-mfi
  {path: 'responsablidad1', component: Responsabilidad01Component},

  //ruat apara tesis
  {path: 'avisos', component: AvisosComponent},
  
  //informacion academico
  {path: 'informacion' , component: InformacionComponent},
  {path: 'tituloprofesional', component: TituloprofesionalComponent},
  {path: 'diplomabachiller', component: DiplomabachillerComponent},
  //testimonio
  {path: 'resena-histórica', component: HistoricalReviewComponent},
{path: 'vision-mision', component: MisionvisionComponent},
  //trabajoestuante
  {path: 'social01', component: Social01Component},

  //contacto
  {path: 'contactos', component: ContactComponent},

  //url por defecto
  { path: '', component: InicioComponent, pathMatch: 'full' },
 { path: '**',   redirectTo: '/', pathMatch: 'full' },
  
];


@NgModule({
  declarations: [AppComponent, InicioComponent,AboutComponent,   
    NoticiasComponent, PEMFIComponent, PEILEComponent, PECSFMTComponent, 
    PELELMCComponent, IleComponent, CsfComponent, LelComponent, MfiComponent,
     Profe01Component, Profe02Component, Responsabilidad01Component, 
     Responsabilidad02Component, Social01Component, Social02Component,
      AvisosComponent,
      DiplomabachillerComponent,
      TituloprofesionalComponent,
      InformacionComponent,
      ContactComponent,
      HistoricalReviewComponent,
      MisionvisionComponent,
      DocentesComponent,
      EjemploComponent,
     
      ],

  imports: [
    BrowserModule,
//conexion a spring
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
HttpClientModule,

    HeaderModule,
    HomeModule,
     
    CaracteristicasModule,
    InscribirseModule,
    CursosModule,
    LlamadaModule,
    EquipoModule,
    TestimoniosModule,
    EventosModule,
    HechosModule,
  
    FooterModule,
   
    AppRoutingModule,

    //para slider

    //importar rutas

// RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), // NO AHACE EFECTO RECARGAR Componente
  RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'}), //codigo para ir al topo al navegar los componnetes CON metod openclick
  ],
  providers: [],
  
  bootstrap: [AppComponent],
  exports: [RouterModule]
  // exports: [RouterModule], ii de no hace efecto su complemento
})
export class AppModule {}
