import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { products } from './product.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  
  imgParent ='https://www.w3schools.com/howto/img_avatar.png';
  register = {
    name: "",
    email: "",
    password: ""
  }


  box = {
    width:100,
    height: 100,
    background: 'red'
  }

  widthImg = 100;
  name = 'Nicolas';
  age = 18
  img = 'https://source.unsplash.com/random'
  btnDisabled = true;
  
  person={
    name: 'Carlos',
    age: 22,
    avatar: 'https://source.unsplash.com/random'
  }
  

  names: string[] = ['Nico', 'Juli', 'Samm', 'Eduardo']
  newName= ''
  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }
  ageIncrease(){
    this.person.age ++
  }
  OnScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name= element.value;
  }

  addName(){
    this.names.push(this.newName);
  }
  onRegister(){
    console.log(this.register);
  }
  onLoaded(img:string){
    console.log('log padre', img);
  }
}
