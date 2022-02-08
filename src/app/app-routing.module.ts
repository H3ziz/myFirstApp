import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"posts", component:PostsComponent},
  {path:"users",component:UsersComponent},
  {path:"products",component:ProductsComponent},
  {path:"products",component:ProductsComponent,children:[{path:'with-discount',component:WithDiscountComponent},
  {path:'without-discout',component:WithoutDiscountComponent}]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
