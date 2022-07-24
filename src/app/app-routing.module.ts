import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RegisterComponent } from './components/register/register.component';
import { SuccessfullOrderComponent } from './components/successfull-order/successfull-order.component';


const routes: Routes = [
  { path: "dashboard", component:DashboardComponent },
  { path: "cart", component:CartComponent },
  { path: "customerDetails", component:CustomerDetailsComponent },
  { path: "orderSummary", component:OrderSummaryComponent },
  { path: "successfullOrder", component:SuccessfullOrderComponent },
  { path: "login", component:LoginComponent },
  { path: "register", component:RegisterComponent },
  { path: "forget-password", component:ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
