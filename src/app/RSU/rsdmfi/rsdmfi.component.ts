import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rsdmfi',
  templateUrl: './rsdmfi.component.html',
  styleUrls: ['./rsdmfi.component.css']
})
export class RsdmfiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openresponsablidad1() {
    this.router.navigate(['responsablidad1']);
  }
}
