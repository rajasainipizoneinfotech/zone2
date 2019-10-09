import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { NewarrivalComponent } from './shared/newarrival/newarrival.component';
import { ShippingDetailsComponent } from './shared/shipping-details/shipping-details.component';
import { InstaphotoComponent } from './shared/instaphoto/instaphoto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeatureComponent,
    NewarrivalComponent,
    ShippingDetailsComponent,
    InstaphotoComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
