import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


bookData: any;
order:Order= new Order (0,0,"",0,0,true);

  constructor(private orderService: OrderServiceService , private userService: UserRegistrationService, private cartService: CartService, private route: Router, private router: ActivatedRoute, private bookService: BookService) { }

  cart: any;
  public TOKEN:any = "";
  token:any=this.router.snapshot.paramMap.get('token');
  user: any;
  book: any;


  ngOnInit(): void {


this.userService.getUserRecordByToken(localStorage.getItem("token")).subscribe(data=>{
  console.log("User data retrieved successfully for given token",data);
  this.user=data;
  this.cartService.getCartRecordByUserId(this.user.data.userId).subscribe(getData=>{
    console.log("Cart Data Retrieved successfully",getData);
    this.cart = getData;
  })
})

this.bookService.getBookRecordById(this.cart.data.bookData.id).subscribe(getData=>{
  console.log("Book data retrieved",getData);
  this.book = getData;
})


// this.cartService.getallcartdata().subscribe((getData: any) => {      // Will show all cart details... 
//   console.log("Cart Called Successfully")   
//   this.cart = getData.data;
//   console.log(this.cart);
//   // this.totalBooks = this.book.length;
// });


    // console.log("Welcome to Cart")

    // this.TOKEN=localStorage.getItem("token");
    // console.log(this.TOKEN);

    // this.cartService.getallcartdata().subscribe((getData: any) => {
    //   if (getData.data.length == undefined) {
    //     this.route.navigate(["details",this.token]);
    //   }
    //   this.cart = getData;
    //   console.log("cart data",this.cart)
    //   this.user = this.cart.data[0].user.userId;
    //    console.log("user data",this.user)
    // })

   }

  increaseQuantity() {
  //    this.cartService.increaseCartQuantity(Id).subscribe((data:any) => {
       console.log("Quantity Increased");
  //      window.location.reload();
  //    });
 
   }
 
   decreaseQuantity(Id:any){
    this.cartService.decreaseCartQuantity(Id).subscribe(data=>{
      console.log("Quantity decreased");
      window.location.reload();
    })
  }
 
     deleteCart(cartId: number) {
       this.cartService.deleteCartByCartId(cartId).subscribe(data => {
        console.log("Cart record deleted successfully")
         window.location.reload()
       });
     }


     placeOrder(){
     // debugger
      // console.log("data",this.cart.data.book.data.bookID);
      // this.customerDetails=true;
      for(let i=0;i< this.cart.data.length;i++) {
        this.order.userId=this.cart.data[i].userId.userId;
        this.order.bookId=this.cart.data[i].bookData.id;
        this.order.totalQuantity=this.cart.data[i].quantity;
        this.order.totalPrice=this.cart.data[i].bookData.price;
        this.order.address=this.user.data.address;
        this.order.cancel=false;
        console.log(this.order);
     //  debugger
        this.orderService.postOrder(this.order).subscribe((data:any)=>{
          console.log("Order Placed Successfully!!!",data);  
          this.order=data;
        
      //    console.log(this.order);
          });
  
      //   this.cartService.deleteCartRecordById(this.cart.data[i].cartId).subscribe(data=>{
      //   console.log("Cart removed !");
      // })
      }
      //  this.router.navigate(['customerDetails',this.token]);
  
    }

}
