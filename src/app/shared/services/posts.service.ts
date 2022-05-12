import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  fetchPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
  }

  // fetchPostsImages() {
  //   let value = Math.floor(Math.random() * 50)
  //   return this.http.get(`https://picsum.photos/500/300?random=${value}`)
  // }
}
