import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface authResponse {
  user:{name:string};
  token:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http:HttpClient) { }
  register(registerationInfo:{name:string; email:string; password:string}):Observable<authResponse>{
    return this.http.post<authResponse>(``, registerationInfo)
   }
}
