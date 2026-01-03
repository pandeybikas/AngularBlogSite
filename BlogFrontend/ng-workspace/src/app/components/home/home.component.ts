import { Component } from '@angular/core';
import { BlogServiceService, blog } from '../../services/blog-service.service';
import { NgFor, NgIf } from '@angular/common';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [NgFor,SlicePipe,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    blogItem:blog[]=[]

   constructor(private blogService:BlogServiceService){
    this.blogService.getBlogList().subscribe({
      next: (res)=>{
        this.blogItem=res
      }
    })
   }
}
