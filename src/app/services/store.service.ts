import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
 private myShoppingCar: Product[] = [];
 private myCar = new BehaviorSubject<Product[]>([]);
 
 myCar$ = this.myCar.asObservable();

  total = 0;
  constructor() { }
  
addProduct(Product: Product){
  this.myShoppingCar.push(Product);
  this.myCar.next(this.myShoppingCar);
  
}

getShoppingCar(){
  return this.myShoppingCar;
}

getTotal(){
  return this.total=this.myShoppingCar.reduce((sum, item)=> sum + item.price, 0);
}
}


