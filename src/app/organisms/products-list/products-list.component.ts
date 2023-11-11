import { Component, OnInit, signal } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = signal<Array<Product>>([])

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.queryProducts().subscribe({
      next: (response) => this.products.set(response),
      error: (error) => console.error(error),
      
    });
  }
}
