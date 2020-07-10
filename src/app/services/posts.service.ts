import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// interface IPost {
//   title: string;
//   body: string;
// }

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  public post: any;
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  savePost(post) {
    return this.http.post(this.url, post);
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }


}
