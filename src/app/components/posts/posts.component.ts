import { PostsService } from './../../services/posts.service';
import { Component, OnInit, Inject, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Observable gives the data source 
//in order to use that data source you need to subscribe it.
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  public posts: any;
  public test: number[];
  public post: any;
  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
    // take all the posts from the services
    this._postService.getPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        if (error.status === 400) {
          alert("Bad Request");
        } else {
          alert("An Unexpected error has occured");
        }

      }
    );
  }

  savePost(post_title: HTMLInputElement, post_body: HTMLInputElement) {
    this.post = {
      title: post_title.value,
      body: post_body.value,
    };
    this._postService.savePost(this.post).subscribe(
      (response) => {
        this.posts.splice(0, 0, this.post); //add to the list of posts
      },
      (error: Response) => {

        if (error.status === 400) {
          alert("Bad Request");
        } else {
          alert("An Unexpected error has occured");
        }

      });
    post_title.value = "";
    post_body.value = "";
  }

  deletePost(post) {
    this._postService.deletePost(345).subscribe(
      (response) => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1); //delete the post from that index
      },
      (error: Response) => {

        if (error.status === 404) {
          alert("This page is already deleted");
          // this.form.setErrors(error.json());
          console.error(error);
        } else {
          alert("An unexpected error ocured");
          console.error(error);
        }

      });

  }

  updatePost() {
    console.log("update");

  }


}
