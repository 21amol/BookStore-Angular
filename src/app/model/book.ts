export class Book {

    bookName : string;
    authorName : string;
    bookDesc : string;
    bookImg : string;
    price : number;
    quantity : number;

    constructor( bookName: string, authorName: string, bookDesc : string, bookImg : string, price:number,
         quantity : number) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.bookDesc = bookDesc;
        this.bookImg = bookImg;
        this.price = price;
        this.quantity = quantity;
    }
}