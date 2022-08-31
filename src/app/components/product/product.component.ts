import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product, rating} from 'src/app/models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() R: rating = {
    rate:0,
    count: 0
  }
   @Input() product: Product = {
    id: '',
    title: '',
    price:0,
    image: '',
    description: '',
    category:'',  
    rating: this.R
   }

 

   @Output() addedProduct = new EventEmitter<Product>();
  
   constructor() { }

  
   
  ngOnInit(): void {
  }

  OnAddToCar(){
    this.addedProduct.emit(this.product)
  }
}
