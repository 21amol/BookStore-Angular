import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  user:any;
  token:any=this.route.snapshot.paramMap.get('token');
  

  constructor(private userService: UserRegistrationService, private route: ActivatedRoute) { }

  cust: Customer = new Customer("","","","");
  
  ngOnInit(): void {
 //   debugger
    this.userService.getUserRecordByToken(localStorage.getItem("token")).subscribe((getData:any)=>{
      console.log("Data retrieved for user",getData);
      this.user=getData.data;
    })
  }

  continue() {
  console.log(this.cust);
  console.log("Customer Details Saved Successfully!!!")
  }

}
