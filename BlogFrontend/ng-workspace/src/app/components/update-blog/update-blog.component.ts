import { Component } from '@angular/core';
import { BlogServiceService, blog } from '../../services/blog-service.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-update-blog',
  imports: [NgFor],
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent {

  allBlogs:blog[]=[]

  constructor(private blogService:BlogServiceService){
    this.blogService.getBlogList().subscribe({
      next: (res)=>{
        this.allBlogs=res
      }
    })
  }

}
