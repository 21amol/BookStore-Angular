import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-successfull-order',
  templateUrl: './successfull-order.component.html',
  styleUrls: ['./successfull-order.component.scss']
})
export class SuccessfullOrderComponent implements OnInit {

  order:any;
  email:any;
  token:any;
  constructor(private orderService:OrderServiceService,private userService:UserRegistrationService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data=>{
      console.log("Orders retrieved successfully",data);
      this.order=data;
      this.email=this.order.data[0].user.email;
      console.log(this.email);
      this.userService.getToken(this.email).subscribe((getData:any)=>{
        console.log("Token retrieved successfully");
        this.token=getData.data;
      })
    })
    

  }

}
