import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"index",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"news",component:NewsComponent},
  {path:"faq",component:FaqComponent},
  {path:"contact",component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
