import { Component, OnInit } from '@angular/core';
import { Icategory } from '../shared-classes-and-types/Icategory';
import { IProduct } from '../shared-classes-and-types/Iproduct';
import { DiscountOffers } from '../shared-classes-and-types/discount-offers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  Discount!:DiscountOffers;
  StoreName !:string;
  StoreLogo !:string;
  ProductList !: IProduct[];
  CategoryList !: Icategory[];
  ClientName !: string;
  IsPurshased!: boolean;

  constructor() {
    this.Discount=  DiscountOffers['10%']
    this.StoreName="Apple";
    this.StoreLogo="../../assets/logo.png"
    this.ProductList=[{ID:1, Name:'Iphone',Quantity:10,Price:100,Img:'img10',}];
    this.CategoryList=[{ID:1,Name:"Mobile"},{ID:2, Name:"MobilePhone"}];
    this.ClientName= "Judy";
    this.IsPurshased= true;

   }

  ngOnInit(): void {
  }

  onPurchase(){

    this.IsPurshased = !this.IsPurshased
  }
}
