import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from 'src/app/service/book.service';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { InteractionService } from 'src/app/service/interaction.service';
import { UserRegistration } from 'src/app/model/register';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  book: any
  totalBooks: number = 0;
  carts: any;
  cartLength: number = 0;
  sort: any;
  bookName: string;
  
  token: any = this.router.snapshot.paramMap.get('token');
  public TOKEN:any = "";
  temp: any;
  user: any

  cart: Cart = new Cart(0,0,0);
  bookId: any;

  // book: Book = new Book ("", "","", "", 0, 0)

  constructor(private route: Router, private bookservice: BookService, private router: ActivatedRoute, private cartService: CartService, private userService: UserRegistrationService, private intr: InteractionService){}

 
 

  ngOnInit(): void {

  //   this.TOKEN=localStorage.getItem("token");
  // // console.log(this.TOKEN);
  //   this.getCartValue();

    this.bookservice.getAllBooks().subscribe((getData: any) => {      // Will show all book details... 
      console.log("Books Called Successfully")   
      this.book = getData.data;
      console.log(this.book);
      this.totalBooks = this.book.length;
    });

    this.userService.getUserRecordByToken(localStorage.getItem("token")).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
       this.user=getData.data;
       console.log(this.user)

       this.cartService.getCartRecordByUserId(getData.data.userId).subscribe(data=>{
        console.log("Cart Data Retrieved successfully",data);
        this.carts=data;
        console.log(this.carts);
  });
});
  }

  // getCartValue(){
  //   // console.log("Hello Cart Value");
  //   this.cartService.getallcartdata().subscribe((getData:any) => {
  //     this.carts = getData.data;
  //     console.log(this.carts);
  //   });
  // }


  searchByName() {
    if (this.bookName == "") {
      this.ngOnInit();
      console.log("Search Completed!!!")
    } else
      this.bookservice.searchBookByName(this.bookName).subscribe((getData: any) => {
        this.book = getData.data;
      });
    console.log("Book Found!!!");
  }

  sortBy() {
    if (this.sort == "Ascending") {
      this.bookservice.sortByAscending().subscribe((getData: any) => {
        this.book = getData.data;
      });
      console.log("Low to High Price")

    } if (this.sort == "Descending") {
      this.bookservice.sortByDescending().subscribe((getData: any) => {
        this.book = getData.data;
      });
      console.log("High to Low Price")

    } if (this.sort == "Relevance") {
      this.ngOnInit();
    }
  }




  addToCart(Id: any) {
  
    console.log("Hellloooo")
    console.log(this.book);
    // this.cartLength = this.carts.length;
     if (this.carts.length == 0) {
      console.log("Welcome");
      this.cart.bookId = Id;

      this.cart.userId=this.user.userId;
  //     this.cart.token = this.TOKEN;
      this.cart.quantity = 1;
      console.log(this.cart);
      this.cartService.addCart(this.cart).subscribe((getData: any) => {
      console.log("Cart Added successfully!!!");
        this.cart = getData.data;
        console.log(this.cart)
        // window.location.reload();
      });
    }
  else {
       this.cartService.getCartRecordByBookId(Id).subscribe(data => {
         this.temp = data;
         console.log(this.temp.data);
        if (this.temp.data == null) {
           this.cart.bookId = Id;

           this.cart.userId=this.user.userId;
           this.cart.quantity=1;
  //         console.log("bookid", this.cart.bookId)
  //         this.cart.token = this.TOKEN;
  //         console.log(this.cart.token);
  //         this.cart.quantity = this.book.quantity;
          this.cartService.addCart(this.cart).subscribe((getData: any) => {
             console.log("Cart Added !");
            this.cart = getData.data;
  //           window.location.reload();
          });
        }
         else {
           alert("Book Already Added!!! Please check cart.");
        }
        window.location.reload();
      });
      
    }
  }
   

    // login() {
    //   this.route.navigate(['signIn']);
    // }
  

  goToCart() {
    console.log(localStorage.getItem("token"));
    this.route.navigate(['cart',this.token]);
    
  }
}
