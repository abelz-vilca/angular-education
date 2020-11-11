import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';



@NgModule({
  declarations: [EquipoComponent],
  imports: [
    CommonModule
  ],
  exports:[EquipoComponent]
})
export class EquipoModule { }
