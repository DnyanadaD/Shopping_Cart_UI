import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Services/share.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import Cart from 'src/app/Models/cart.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public order:Cart[];
  constructor(private fs: FooterService, private nav :NavbarServiceService,private shared:ShareService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful;
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.refreshOrdertList();
  }
   refreshOrdertList(){
   this.shared.GetAllCart().subscribe(data=>{
      this.order=data;
      console.log(this.order)
    });
  }

public grandTotal():number{
  let total : number = 0;
  for(let order of this.order){
    total+= order.quantity* order.price;
  }
  return total;
}
}