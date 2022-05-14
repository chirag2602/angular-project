import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import { BlogService } from '../service/blog.service';
// import { blogs } from '../model/bloglist';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private service:BlogService) { }

  ngOnInit(): void {
    this.blogs=this.service.getBlog();
    
  }

}
