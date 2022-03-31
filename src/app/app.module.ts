import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SaleComponent } from './component/sale/sale.component';
import { SucreComponent } from './component/sucre/sucre.component';
import { HeadComponent } from './component/head/head.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProduitComponent } from './component/produit/produit.component';
import { InfoComponent } from './component/info/info.component';
import { DescrptionComponent } from './component/descrption/descrption.component';
import { IdeeComponent } from './component/idee/idee.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './component/signup/signup.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminSaleComponent } from './component/admin-sale/admin-sale.component';
import { AdminSucreComponent } from './component/admin-sucre/admin-sucre.component';
import { AdminBoissonComponent } from './component/admin-boisson/admin-boisson.component';
import { AddSaleComponent } from './component/add-sale/add-sale.component';
import { AddSucreComponent } from './component/add-sucre/add-sucre.component';
import { AddBoissonComponent } from './component/add-boisson/add-boisson.component';
import { DisplaySucreComponent } from './component/display-sucre/display-sucre.component';
import { DisplayBoissonComponent } from './component/display-boisson/display-boisson.component';
import { DisplaySaleComponent } from './component/display-sale/display-sale.component';
import { ResultComponent } from './component/result/result.component';
import { DetaileComponent } from './component/detaile/detaile.component';
import { ServiceComponent } from './component/service/service.component';
import { ArticalComponent } from './artical/artical.component';
import { BlogComponent } from './blog/blog.component';
import { CaroselComponent } from './component/carosel/carosel.component';


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    LoginComponent,
    SaleComponent,
    SucreComponent,
    HeadComponent,
    FooterComponent,
    ProduitComponent,
    SignUpComponent,
    InfoComponent,
    DescrptionComponent,
    IdeeComponent,
    AdminComponent,
    AdminSaleComponent,
    AdminSucreComponent,
    AdminBoissonComponent,
    AddSaleComponent,
    AddSucreComponent,
    AddBoissonComponent,
    DisplaySucreComponent,
    DisplayBoissonComponent,
    DisplaySaleComponent,
  
    ResultComponent,
  
    DetaileComponent,
  
    ServiceComponent,
  
    ArticalComponent,
  
    BlogComponent,
  
    CaroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
