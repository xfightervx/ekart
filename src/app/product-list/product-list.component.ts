import { Component } from '@angular/core';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  /* name : string = "Name"; */
  addToCart: number = 0;
  product = {
    name:'iphone X',
    price: 998,
    color: 'black',
    discount : 8.5,
    instock :5,
    pImage : "../../assets/iphone.jpeg"
  }
  getDiscountedPrice(){
    return (this.product.price * (1-this.product.discount /100)).toFixed(2);
  }

  OnNameChange(event : any){
    /* this.name = event.target.value; */
  }

  Add(){
    this.addToCart += 1;
  }

  Sub(){
    this.addToCart -= 1;
  }
}