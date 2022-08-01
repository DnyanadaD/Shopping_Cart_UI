import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; 
import { UserDetails } from '../Models/UserDetails.model';
import { Product } from '../Models/Product.model';
import Cart from '../Models/Cart.model';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public userService =  UserDetails;
  public products :Product[];
  public cart:Cart;
readonly APIUrl ="https://localhost:44339"
  constructor(private http:HttpClient) { }
  GetAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/GetAllUserDetails()')
    }
  
  GetAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.APIUrl+'/api/Prouduct/GetAllProduct()')
}
addToCart(val:any){
  return this.http.post<Cart[]>(this.APIUrl+'/api/Cart/SaveCart',val,);
}
addUserDetails(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/SaveUserDetails',val)
  }
GetAllCart():Observable<Cart[]>
{
return this.http.get<Cart[]>(this.APIUrl+'/api/Cart/GetAllCart')
}
DeleteFromCart(id:number)
{ return this.http.delete<Cart[]>(this.APIUrl+'/api/Cart/DeleteCart?CartId'+id)
}
userlogin(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/login',val)
}
}
