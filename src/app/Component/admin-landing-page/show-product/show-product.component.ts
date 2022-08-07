import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { HttpClient } from '@angular/common/http';
import { Observable,} from 'rxjs';
import { ShareService } from 'src/app/Services/share.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  readonly APIUrl='https://localhost:44307/api/';
  public products:Product[];
  ModalTitle:string;
  
  router: any;
  modalInput: number;
  constructor(private service:ShareService,private http:HttpClient, public nav:NavbarServiceService ) {}
  
  ActivateAddEditProd:boolean=false;
  Product:any;
  ngOnInit(): void {
    this.nav.show();
    this.refreshList();
  }
delete(id:number){
  if(confirm('Are you sure?')){
    this.service.DeleteProduct(id).subscribe(data=>{
      console.log(data);
      this.refreshList();
    });
    location.reload();
  }
  
} 
 displayStyle = "none";
  
  openPopup1() {
    this.displayStyle = "block";
    this.ModalTitle="Add Product";
   
  }
  openPopup() {
    this.displayStyle = "block";
    this.ModalTitle="Add Product";
   
  }
  
  closePopup() {
    this.displayStyle = "none";
    location.reload();
  }
  refreshList(){
    this.service.GetAllProduct().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
    
  }
  editClick(id:number){
    this.displayStyle = "block";
    console.log(id);
    
    this.ModalTitle="Edit Product";
   
  }

}
