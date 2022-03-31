import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AddSaleComponent } from './component/add-sale/add-sale.component';
import { AddSucreComponent } from './component/add-sucre/add-sucre.component';
import { AdminComponent } from './component/admin/admin.component';
import { DisplaySaleComponent } from './component/display-sale/display-sale.component';
import { DisplaySucreComponent } from './component/display-sucre/display-sucre.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SaleComponent } from './component/sale/sale.component';
import { SignUpComponent } from './component/signup/signup.component';
import { SucreComponent } from './component/sucre/sucre.component';



const routes: Routes = [  {path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"sginup",component:SignUpComponent},
{path:"admin",component:AdminComponent},
{path:"allsales",component:SaleComponent},
{path:"allsucres",component:SucreComponent},
{ path: "addsale", component: AddSaleComponent },
{ path: "addsucre", component: AddSucreComponent },
{ path: "editSale/:id", component: AddSaleComponent },
//{path:"sucres",component:SucreComponent},
{ path: "editSucre/:id", component: AddSucreComponent },
{ path: "displaySale/:id", component: DisplaySaleComponent },
{ path: "blog", component: BlogComponent },
{ path: "displaySucre/:id", component: DisplaySucreComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
