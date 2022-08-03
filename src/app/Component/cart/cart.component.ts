import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from 'src/app/Models/cart.model';
import { ShareService } from 'src/app/Services/share.service';
import {MatIconModule} from '@angular/material/icon';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from 'src/app/Models/Product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart[];
  
  constructor(private fs: FooterService, private nav :NavbarServiceService,private shared:ShareService ,public http :HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful;
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.refreshCartList();
  }
  isActive = true;
  //public quantity:number=1;
  refreshCartList(){
  this.shared.GetAllCart().subscribe(data=>{
    this.cart=data;
    console.log(this.cart)
  });

  }
  DeleteCart(id:number){
    if(confirm('Are you sure?')){
      this.shared.DeleteFromCart(id).subscribe(data=>{
        console.log(data);
      });
      location.reload();
    }
}
   incrementQuantity(cartId:number){
    this.cart = this.cart.map((cart:Cart) => {
      if (cart.cartId === cartId) {
        return {
          ...cart,
          quantity: cart.quantity + 1,
        };
      }
      return cart;
    });
  }

  decrementQuantity(cartId:number){
    this.cart = this.cart.map((cart:Cart) => {
      if (cart.cartId === cartId) {
        return {
          ...cart,
         quantity: cart.quantity > 1 ? cart.quantity - 1 : 1
        };
      }
      return cart;
    });  
  }
  /*
  countPrice(){
     this.Price = 0;
      for(let p of this.packagesArray){
        this.Price += p.price*p.quantity
      }
  }
*/
/*addOrder(){
  this.shared.addOrderDetails(this.cart).subscribe(res=>{

  });
  alert('Order successful!');
  this.router.navigate(['order']);
}*/

}
