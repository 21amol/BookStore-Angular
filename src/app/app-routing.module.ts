import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';


const routes: Routes = [
  { path: "dashboard", component:DashboardComponent },
  { path: "cart", component:CartComponent },
  { path: "orderSummary", component:OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
