import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
export interface blog{
  id:number,
  title:string,
  image:string,
  body:string,
  author: {
    id:number
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
  getAuthors():Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}authors/`)
  }
  getCategories():Observable<any[]>{
    return this.http.get<any[]>(`${environment.baseUrl}category/`)
  }
  addNewBlog(formdata:FormData):Observable<any>{
    return this.http.post<any>(`${environment.baseUrl}blogs/`, formdata)
  }
}
