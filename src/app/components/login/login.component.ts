import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { InteractionService } from 'src/app/service/interaction.service';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private userRegistrationService: UserRegistrationService, private intr: InteractionService) { }

  login: Login = new Login("", "");

  ngOnInit(): void {
  }

  token: any;
  registerData = false;


  register() {
    this.route.navigate(['register']);
  }

  signIn() {
    // console.log(this.login);
    // console.log("Submitted Successfully");
    // this.userRegistrationService.userLogin(this.login).subscribe((data:any)=> {this.route.navigate(["dashboard"])});

    // console.log(this.login)
    this.registerData = true;
    setTimeout(() => {
      this.userRegistrationService.userLogin(this.login).subscribe((data: any) => {
        this.userRegistrationService.getToken(this.login.emailId).subscribe((getData: any) => {
          console.log("Token retrieved successfully", getData);
          this.token = getData.data;
          localStorage.setItem("token", this.token);
          console.log("Token from login", this.token);
          this.intr.sendToken(this.token);
          this.route.navigate(['dashboard', this.token]);
        });
        console.log("User Logged In Successfully", data);
      }, error => {
        alert("Invalid username or password");
      });
    }, 1000);
    //this.router.navigate(['dashboard']);
  }
}


