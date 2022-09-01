import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { createProductDTO, Product, updateProductDTO } from 'src/app/models/product.model';
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
   limit = 3;
   offset = 0;

    constructor(
    private StoreService : StoreService,
    private ProductService: ProductsService
  ) { 
    this.myShoppingCar = this.StoreService.getShoppingCar();
  }
 
  ngOnInit(): void {
    
   this.loadMoreProducts();
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
createNewProduct(){
  const product: createProductDTO={
    title: 'Nuevo-Producto',
    description: 'aslkdfnadskl',
    images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
    price: 1000,
    categoryId: 1
  }
  this.ProductService.create(product)
  .subscribe(data => {
    this.products.unshift(data);
  })
}
updateProduct(){
  const changes: updateProductDTO = {
    title: 'Nuevisimo'
  }
  const id =this.productChosen.id; 
  this.ProductService.update(id, changes)
  .subscribe(data =>{
    const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
    
    this.products[productIndex] = data;
    this.productChosen = data;
  })
}

deleteProduct(){
  const id = this.productChosen.id
  this.ProductService.delete(id)
  .subscribe(() => {
    const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
    this.products.splice(productIndex, 1);
    this.showProductDetail = false;
  })
}
loadMoreProducts(){
    this.ProductService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
}

}
