import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HechosComponent } from './hechos.component';




@NgModule({
  declarations: [HechosComponent],
  imports: [
    CommonModule
  ],
  exports: [HechosComponent]
})
export class HechosModule { }
