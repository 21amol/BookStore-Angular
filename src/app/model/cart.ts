export class Cart {
    quantity:number;
    bookId:number;
    userId:number;
 
    constructor(quantity:number,bookId:number,userId:number){
        this.quantity=quantity;
        this.bookId=bookId;
        this.userId=userId;
    }
}