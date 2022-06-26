import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  book: any
  totalBooks: number = 0;
  cartLength: number = 0
  sort:any;
  bookName:string;

  constructor(private service: BookService, private route: ActivatedRoute) { }

  // book: Book = new Book ("", "","", "", 0, 0) 

  ngOnInit(): void {
      this.service.getAllBooks().subscribe((getData:any)=>{     // Will show all book details...
        this.book=getData.data;
        this.totalBooks=this.book.length;
      });
    }

    searchByName() {
      if (this.bookName == "") {
        this.ngOnInit();
        console.log("Search Completed!!!")
      } else 
        this.service.searchBookByName(this.bookName).subscribe((getData:any) => {
        this.book=getData.data;
        });
        console.log("Book Found!!!");
    }

    sortBy() {
      if (this.sort == "Ascending") {
        this.service.sortByAscending().subscribe((getData:any) => {
          this.book = getData.data;
        });
          console.log("Low to High Price")

      } if (this.sort == "Descending") {
        this.service.sortByDescending().subscribe((getData:any) => {
          this.book = getData.data;
        });
        console.log("High to Low Price")

      } if (this.sort == "Relevance") {
        this.ngOnInit();
      }
   }

  }
