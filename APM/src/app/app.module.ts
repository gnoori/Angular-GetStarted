import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product-list/product.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
