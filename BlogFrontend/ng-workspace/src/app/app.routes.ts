import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'addBlog', component:AddBlogComponent},
    {path: 'updateBlog', component:UpdateBlogComponent}
];
