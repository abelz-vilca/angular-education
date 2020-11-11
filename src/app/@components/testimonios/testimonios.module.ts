import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimoniosComponent } from './testimonios.component';



@NgModule({
  declarations: [TestimoniosComponent],
  imports: [
    CommonModule
  ],
  exports : [TestimoniosComponent]
})
export class TestimoniosModule { }
