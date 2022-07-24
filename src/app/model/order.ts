export class Order{
    bookId:number;
    userId:number;
    address:string;
    totalQuantity:number;
    totalPrice:number;
    cancel:boolean;

    constructor(bookId:number,userId:number,address:string,totalQuanity:number,totalPrice:number,cancel:boolean){
        this.userId=userId;
        this.bookId=bookId;
        this.totalQuantity=totalQuanity;
        this.totalPrice=totalPrice;
        this.address=address;
        this.cancel=cancel;
    }
}