import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCar: Product[] = [];
  total = 0;
  today = new Date();
  date = new Date(2022, 1, 2);
  constructor(
    private StoreService : StoreService,
    private ProductService: ProductsService
  ) { 
    this.myShoppingCar = this.StoreService.getShoppingCar();
  }
  products: Product[] = [];
  ngOnInit(): void {
    
    this.ProductService.getAllProducts().subscribe((data)=>{this.products = data})
  }

  onAddToShoppingCar(Product: Product){
   this.StoreService.addProduct(Product);
   this.total =this.StoreService.getTotal();

  }
}
