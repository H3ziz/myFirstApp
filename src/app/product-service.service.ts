import { Injectable } from '@angular/core';
import { IProduct } from './shared-classes-and-types/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  allProds:IProduct[];

  constructor() {
    this.allProds=[
      {
        ID: 1,
        Name:'Iphone',
        Quantity :50,
        Price : 12000,
        Img:'../../assets/ph1.png'
      },{
         ID:2,
        Name:'Saumsung',
        Quantity :30,
        Price : 7000,
        Img:'../../assets/ph1.png'
      },{
        ID:3,
        Name:'Hauwei',
        Quantity :75,
        Price : 10000,
        Img:'../../assets/ph1.png'
      }
    ]
  }

  GetAllProducts(){
    return this.allProds;
  }

  GetProductByID(prdID: number)
  {
    if (isNaN(prdID))
    {
      return ' ID is not a Number '
    }
    const specificprod = this.allProds.find((product)=>product.ID = prdID)

    if(specificprod)
    {
      return specificprod;
    }
    else{
      return "the Product you want is not exist "
    }
  
exports = {ProductServiceService}
   }

}
