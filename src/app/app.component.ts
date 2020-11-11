import { Component } from '@angular/core';
import { DocenteService } from './services/docente/docente.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  docentes: any;
    constructor(
      private router: Router,
    
      public docenteService: DocenteService,
   
    ) { }

  ngOnInit() {
    this.docenteService.getAllDocentes().subscribe(resp => {
      this.docentes = resp;
    },
      error => { console.error(error) }
    );
  }
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
}

}
