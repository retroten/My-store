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
  products: Product[] = [];
  myShoppingCar: Product[] = [];
  total = 0;
  today = new Date();
  date = new Date(2022, 1, 2);
  showProductDetail =false;
  productChosen: Product= {
    id: '',
    title: '',
    price:0,
    images: [],
    description: '',
    category:{
      id: '',
      name: '',
      typeImg: ''
    }
   }

    constructor(
    private StoreService : StoreService,
    private ProductService: ProductsService
  ) { 
    this.myShoppingCar = this.StoreService.getShoppingCar();
  }
 
  ngOnInit(): void {
    
    this.ProductService.getAllProducts()
      .subscribe(data => { 
        this.products = data;
      });
  }

  onAddToShoppingCar(Product: Product){
   this.StoreService.addProduct(Product);
   this.total =this.StoreService.getTotal();

  }
  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  
  }
onShowDetail(id:string){
  this.ProductService.getProduct(id)
    .subscribe(
      data =>{
        this.toggleProductDetail();
        this.productChosen = data;
        }
    )
}

}
