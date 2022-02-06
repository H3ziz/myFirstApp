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
<<<<<<< Updated upstream
        Name:'Coffee',
        Quantity :100,
        Price : 30,
        Img:'../../assets/images/coffee.jpg'
      },{
         ID:2,
        Name:'Pepsi',
        Quantity :200,
        Price : 15,
        Img:'../../assets/images/pepsi.jpg'
      },{
        ID:3,
        Name:'Tea',
        Quantity :75,
        Price : 10,
        Img:'../../assets/images/tea.jpg'
=======
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
>>>>>>> Stashed changes
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
