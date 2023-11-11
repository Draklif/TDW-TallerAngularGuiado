import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    CardComponent
  ]
})
export class MoleculesModule { }
