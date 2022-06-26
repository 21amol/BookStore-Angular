import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

// Getting all book details...
getAllBooks() {
  return this.http.get("http://localhost:8080/book/get");
}

// Getting book by author name...
searchBookByName(name:string) {
  return this.http.get("http://localhost:8080/book/bookname/" + name);
}

// Sorting Book By Low to High price....
sortByAscending() {
  return this.http.get("http://localhost:8080/book/sortAsc")
}

// Sorting book by High to Low price...
sortByDescending() {
  return this.http.get("http://localhost:8080/book/sortDesc")
}





}
