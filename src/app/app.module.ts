import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './products/featured/featured.component';
import { FeaturedPreferencesComponent } from './products/featured/preferences/preferences.component';
import { ProductComponent } from './products/product/product.component';
import { FooterComponent } from './footer/footer.component'
import { PersonalizeComponent } from './products/personalize/personalize.component';
import { PersonalizeSearchbarComponent } from './products/personalize/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedComponent,
    FeaturedPreferencesComponent,
    ProductComponent,
    FooterComponent,
    PersonalizeComponent,
    PersonalizeSearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
