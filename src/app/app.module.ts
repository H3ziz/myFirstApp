import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ChildComponantComponent } from './child-componant/child-componant.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from'@angular/common/http';
import { LoginComponent } from './login/login.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ChildComponantComponent,
    ParentComponentComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    LoginComponent,
    WithDiscountComponent,
    WithoutDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
