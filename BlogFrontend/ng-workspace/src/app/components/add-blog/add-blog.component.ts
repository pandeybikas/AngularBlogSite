import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../../services/blog-service.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-blog',
  standalone:true,
  imports: [NgFor,CommonModule,ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent implements OnInit{

  blogform!:FormGroup;
  author:any[]=[];
  category:any[]=[];
  selectedImage!:File

  constructor(private fb:FormBuilder, private blogService:BlogServiceService){}

  ngOnInit(): void {
    this.blogform= this.fb.group({
      title:['', Validators.required],
      image:[null],
      body:['', Validators.required],
      author_id:['', Validators.required],
      category_ids:[[], Validators.required],

    })
    this.loadAuthors();
    this.loadCategory();
  }
  loadAuthors(){
    this.blogService.getAuthors().subscribe({
      next: (res)=>{
        this.author=res
      }
    })
  }
  loadCategory(){
    this.blogService.getCategories().subscribe(res=>{
      this.category= res
    })
  }
  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
  }

  submitBlog(){
    if(this.blogform.invalid){
      return;
    }

    const formData= new FormData();
    formData.append('title', this.blogform.value.title);
    formData.append('body', this.blogform.value.body);
    formData.append('author_id', this.blogform.value.author_id)
    this.blogform.value.category_ids.forEach((id:number)=>{
      formData.append('category_ids', id.toString())
    })
    if(this.selectedImage){
      formData.append('image', this.selectedImage)
    }
    this.blogService.addNewBlog(formData).subscribe({
      next : ()=>{
        alert('blog added successfully!')
        
        
        this.blogform.reset();
        console.log(this.blogform);
        
      }
    })
  }

}
