import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  bookData: any;
  order: any;

  constructor(private orderService: OrderServiceService, private bookService: BookService) { }

  book: any;
  cart: any;

  ngOnInit(): void {
    // debugger
    this.orderService.getOrders().subscribe((getData: any) => {
      console.log("order Data Retrieved successfully", getData);
      this.order = getData;
    });
    // this.bookService.getBookRecordById(this.cart.data.bookData.id).subscribe(data=>{
    //   console.log("Book data retrieved",data);
    //   this.book = data;
    // })
  }
}


