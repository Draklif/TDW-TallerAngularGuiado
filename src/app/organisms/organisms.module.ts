import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    HttpClientModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class OrganismsModule { }
