import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input('img') img:string='valor init';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = 'https://www.m2crowd.com/core/i/placeholder.png';
  // counter =0;
  constructor() {
    console.log("constructor");
   }
  ngOnInit(): void {
   console.log("ngOnInit");
    // window.setInterval(()=>{
    //   this.counter +1;
    //   console.log("Running counter");
    // },1000);
  }
  ngOnChanges():void{
    console.log("ngOnChanges");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy");
  }

imgLoaded(){
  console.log('Load hijo');
  this.loaded.emit(this.img);
}
imgError(){
  this.img =this.imgDefault;
}
}
