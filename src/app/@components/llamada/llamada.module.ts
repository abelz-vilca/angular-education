import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlamadaComponent } from './llamada.component';



@NgModule({
  declarations: [LlamadaComponent],
  imports: [
    CommonModule
  ],
  exports:[LlamadaComponent]
})
export class LlamadaModule { }
