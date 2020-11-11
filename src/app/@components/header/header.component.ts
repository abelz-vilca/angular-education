import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

// declare 	function init_plugins():any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
 
   
  }
  ngOnInit(): void {
    // init_plugins();

    // setInterval(() => this.openpeile(), 15000);//aumentado para recargar componente
    
  }
  onActivate(event) {//este es para ir al top con el router link esta declarado en app.componten.html
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
}
  openmision(){
    this.router.navigate(['vision-mision'])
  }
  //repositori estudiantes
  opentrabajoestudiante() {
    this.router.navigate(['social01']);
  }
  //reseña-historica
  openresena() {
    this.router.navigate(['resena-histórica']);
  }
  openabout() {
    this.router.navigate(['about']);
  }
  //abour de programas
  openpeile() {
    this.router.navigate(['peile']);

   
  }
  openpecsfmt() {
    this.router.navigate(['pecsfmt']);
  }
  openpelelmc() {
    this.router.navigate(['pelelmc']);
    
  }
  openpemfi() {
     this.router.navigate(['programa-Matemática-Física-e-Informática']);
    // this.router.navigateByUrl('/programa-Matemática-Física-e-Informática', { skipLocationChange: true }).then(() => {
    //    this.router.navigate(['programa-Matemática-Física-e-Informática']);
    //  });
    
     
  }
  
  //route teachers
  opendocente() {
    this.router.navigate(['plana-Docente']);
   

 }
  
  openile() {
    this.router.navigate(['ile']);
  }
  opencsf() {
    this.router.navigate(['csf']);
  }
  openlel() {
    this.router.navigate(['lel']);
  }
  //routes rsu
  openRSDmfi() {
    
    this.router.navigate(['rsdmfi']);
  }
  openRSDile() {
    
    this.router.navigate(['rsdile']);
  }
  openRSDcsf() {
    
    this.router.navigate(['rsdcsf']);
  }
  openRSDlel() {
    
    this.router.navigate(['rsdlel']);
  }
  //tesis
  opentesis() {
    this.router.navigate(['avisos']);
  }

  //route informacion grados
  opentramitedoc() {
    this.router.navigate(['informacion']);
   

 }
 //contacto
 opencontacto(){
   this.router.navigate(['contactos'])
 }

}
