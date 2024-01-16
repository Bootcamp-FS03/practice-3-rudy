import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { ApiResponse, Post } from 'src/app/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    try{
      this.postService.getPosts().subscribe(
      (response: ApiResponse<Post[]>) => {
        this.posts = response.payload ?? [];
      }
    );}
    catch(error){
      console.error("Error while trying to retrieve posts")
    }
  }
}
