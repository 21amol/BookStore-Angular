import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/model/register';
import { UserRegistrationService } from 'src/app/service/user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userRegistrationService: UserRegistrationService, private router: Router) { }

user: UserRegistration = new UserRegistration ("","","","","")

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    console.log("User Registered Successfully");
    this.userRegistrationService.registerUser(this.user).subscribe((data:any)=>{ 
      this.router.navigate(["dashboard"])});

  }
}
