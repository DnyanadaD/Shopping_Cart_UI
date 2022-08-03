import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProductComponent } from './Component/product/product.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareService } from './Services/share.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Component/cart/cart.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AdminLandingPageComponent } from './Component/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './Component/user-landing-page/user-landing-page.component';
import { ErrorComponent } from './Component/error/error.component';
import { OrderComponent } from './Component/order/order.component';
//import { CartComponent } from './Component/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    ErrorComponent,
    OrderComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    [FormsModule,ReactiveFormsModule],
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'products', component: ProductComponent},
      {path: 'cart', component:CartComponent},
      {path: 'login/user', component:UserLandingPageComponent},
      {path: 'login/admin', component:AdminLandingPageComponent},
      {path: 'order', component: OrderComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component:ErrorComponent,pathMatch:'full'}
    ]),
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
