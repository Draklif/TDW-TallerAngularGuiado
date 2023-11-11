import { Component, Input, computed, signal } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  registro = signal<Product>(<any>null);
  title = computed(
    () => !this.registro() 
      ? '' 
      : `${this.registro()?.category}: ${this.registro()?.title}`
  )
  @Input() set producto(value: Product) {
    this.registro.set(value);
  }
}
