import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }


postOrder(order:any){
  return this.http.post("http://localhost:8080/order/add",order);
}

getOrders(){
  return this.http.get("http://localhost:8080/order/get");
}

}