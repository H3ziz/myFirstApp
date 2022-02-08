import { Component, OnInit } from '@angular/core';
import { Ipost } from '../shared-classes-and-types/Ipost';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts!:Ipost[];
  errMsg!:string;

  constructor(private postsService:PostsService) {

   }
   displayPosts(){
    this.postsService.getAllPosts().subscribe(
      data=>{
       this.posts=data;
      },
      error=>{
        this.errMsg= error.message;
      }
    )
  }
  ngOnInit(): void {
    this.displayPosts();

  }

}
