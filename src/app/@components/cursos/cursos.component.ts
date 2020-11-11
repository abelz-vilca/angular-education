import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
     this.router.navigate(['pemfi']);
    // this.router.navigateByUrl('/pemfi', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['pemfi']);
    // });
  }

}
