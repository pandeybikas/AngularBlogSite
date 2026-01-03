import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
export interface blog{
  title:string,
  image:string,
  body:string,
  author: {
    pic:string,
    name:string
  }
  category:{
    id:number,
    category_name:string
  }[],
  created_at:string
}
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http:HttpClient) { }

  getBlogList():Observable<blog[]>{
    return this.http.get<blog[]>(`${environment.baseUrl}blogs/`)
  }
}
