import { Injectable } from '@angular/core';
import { Iuser } from './shared-classes-and-types/Iuser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
    
   }
   getAllUsers():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
