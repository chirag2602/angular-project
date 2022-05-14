import { Injectable } from '@angular/core';
import { BloglistComponent } from '../bloglist/bloglist.component';
import { blogs } from '../model/bloglist';
import { Blog } from '../model/bloghub';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs:Blog[]


  constructor() { 
    this.blogs=blogs  }
    getBlog(){
      return this.blogs
    }


    addBlog(blog:Blog)
    { 
      let id=this.blogs.length+1;
      blog.id=id
      this.blogs.unshift(blog);
      console.log(this.blogs)
    }
}
