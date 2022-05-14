import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  categories=['technical','personal','nature'];
  constructor(private service:BlogService) { }

  ngOnInit(): void {
  }
  insert(blog: any){
    console.log("Inserting..")
    this.service.addBlog(blog)
  }
 

}
