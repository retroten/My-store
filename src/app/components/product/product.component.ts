import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from 'src/app/models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   @Input() product: Product = {
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

   @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();
   constructor() { }

  
   
  ngOnInit(): void {
  }

  OnAddToCar(){
    this.addedProduct.emit(this.product)
  }
  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }

}
