import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // Adding book to cart..
  addCart(cart:any){
    return this.http.post("http://localhost:8080/cart/add", cart);
  }

  updateCartByCartQuantityByCartId(Id:any,quantity:any){
    return this.http.get("http://localhost:8080/cart/cartid/"+Id+"?quantity="+quantity)
}

deleteCartByCartId(Id:any){
  return this.http.delete("http://localhost:8080/cart/remove/"+ Id);
 }

 getallcartdata(){
  return this.http.get("http://localhost:8080/cart/get")
}

getCartRecordByBookId(bookId:any){
  return this.http.get("http://localhost:8080/cart/getCartByBookId/"+bookId);
}

getCartRecordByUserId(Id:any){
  return this.http.get("http://localhost:8080/cart/retrieveCartByUserId/"+Id);
}

deleteCartRecordById(Id:any){
  return this.http.delete("http://localhost:8080/cart/remove/"+Id);
}

decreaseCartQuantity(Id:any){
  return this.http.get("http://localhost:8080/cart/decreaseQuantity/"+Id);
}




// increaseCartQuantity(Id:any){
//   return this.http.get("http://localhost:8080/cart/increaseQuantity/"+Id);
// }


}
