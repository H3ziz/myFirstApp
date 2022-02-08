import { Injectable } from '@angular/core';
import { Ipost } from './shared-classes-and-types/Ipost';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) {}

  getAllPosts():Observable<Ipost[]>{
    return this.httpClient.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
