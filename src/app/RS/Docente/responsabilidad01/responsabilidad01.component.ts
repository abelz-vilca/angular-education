import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-responsabilidad01',
  templateUrl: './responsabilidad01.component.html',
  styleUrls: ['./responsabilidad01.component.css']
})
export class Responsabilidad01Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openRSDmfi() {
    
    this.router.navigate(['rsdmfi']);
  }
}
