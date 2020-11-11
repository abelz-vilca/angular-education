import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from './caracteristicas.component';



@NgModule({
  declarations: [CaracteristicasComponent],
  imports: [
    CommonModule
  ],
  exports:[CaracteristicasComponent]
})
export class CaracteristicasModule { }
