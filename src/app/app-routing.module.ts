import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"index",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"news",component:NewsComponent},
  {path:"faq",component:FaqComponent},
  {path:"contact",component:ContactComponent},
  {path:"category",component:CategoryComponent},
  {path:"singleproduct",component:SingleProductComponent},
  {path:"login",component:LoginComponent},
  {path:"tracking",component:TrackingComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"cart",component:CartComponent},
  {path:"confirm",component:ConfirmationComponent},
  {path:"blog",component:BlogComponent},
  {path:"single-blog",component:SingleBlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
