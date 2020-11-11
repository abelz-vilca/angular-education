import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';



@NgModule({
  declarations: [EventosComponent],
  imports: [
    CommonModule
  ],
  exports:[EventosComponent]
})
export class EventosModule { }
