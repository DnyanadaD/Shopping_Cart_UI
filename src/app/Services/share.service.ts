import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; 
import { UserDetails } from '../Models/UserDetails.model';
import { Product } from '../Models/Product.model';
import cart from '../Models/cart.model';
import { feedback } from '../Models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public userService =  UserDetails;
  public products :Product[];
  public product:Product;
  public cart:cart[];
  readonly APIUrl ="https://localhost:44339"
  constructor(private http:HttpClient) { }
GetAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/api/UserDetails/GetAllUserDetails()')
  }
GetAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.APIUrl+'/api/Prouduct/GetAllProduct()')
}

readonly apiurl="https://localhost:44339/api/Prouduct/SaveProduct"
Addproduct(val:any){
  return this.http.post(this.apiurl,val);
}

UpdateProduct(val:any){
  return this.http.put<Product[]>(this.APIUrl+'/api/Prouduct/UpdateProduct',val);
}
DeleteProduct(id:number){
  return this.http.delete<Product[]>(this.APIUrl+'/api/Prouduct/DeleteProduct?ProductId='+id);
}
GetProduct(val:any){
  return this.http.post(this.APIUrl+'api/Prouduct/GetProduct?ProductId=',val);
}

UpdateCart(val:any){
  return this.http.put(this.APIUrl+'/api/Cart/UpdateCart',val)
}
addToCart(val:any){
  return this.http.post<cart>(this.APIUrl+'/api/Cart/SaveCart',val);
}
addUserDetails(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/SaveUserDetails',val)
  }
GetAllCart():Observable<cart[]>
{
return this.http.get<cart[]>(this.APIUrl+'/api/Cart/GetAllCart')
}
DeleteFromCart(id:number)
{ return this.http.delete<cart[]>(this.APIUrl+'/api/Cart/DeleteCart?CartId='+id)
}
userlogin(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/login',val)
}
addOrderDetails(val:any){
  console.log(val);
  return this.http.post<cart[]>(this.APIUrl+'/api/Order/SaveOrderDetails',val)
}
GetAllFeedDetails():Observable<feedback[]>
{
 return this.http.get<feedback[]>(this.APIUrl+'/api/Feedback/GetAllFeedDetails()')
}
addFeedDetails(val:any){
  console.log(val);
  return this.http.post<feedback>(this.APIUrl+'/api/Feedback/SaveFeedDetails',val)
}
}





























// GetAllOrderDetails():Observable<order[]>
// {
//   return this.http.get<order[]>(this.APIUrl+'/api/Order/GetAllOrderDetails()')
// }

    //  GetAllUserDetailsbyEmail(val:any):{
    //   console.log(val);
    //   return this.http.get<UserDetails[]>(this.APIUrl+'api/UserDetails/GetUserbyEmail?EmailId=',val)
    //   }

///api/UserDetails/GetUserbyEmail