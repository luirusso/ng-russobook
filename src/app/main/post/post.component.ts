import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})
export class PostComponent implements OnInit {
  posts: [] | any = [];
  images: [] | any = [];
  isLoading = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((data: any) => {
      this.isLoading = false;
      this.posts = data;
    })

    // this.postsService.fetchPostsImages().subscribe((data: any) => { console
    //   console.log(data)
    //   this.images = data;
    // })
  }
}
