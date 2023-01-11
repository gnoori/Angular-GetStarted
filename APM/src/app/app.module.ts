import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product-list/product.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
