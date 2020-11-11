import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscribirseComponent } from './inscribirse.component';



@NgModule({
  declarations: [InscribirseComponent],
  imports: [
    CommonModule
  ],
  exports:[InscribirseComponent]
})
export class InscribirseModule { }
