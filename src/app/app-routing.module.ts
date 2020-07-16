import { ZippyComponent } from './components/zippy/zippy.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { GithubProfileComponent } from './components/github/github-profile/github-profile.component';
import { GithubFollowersComponent } from './components/github/github-followers/github-followers.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "followers/:id/:username",
    component: GithubProfileComponent
  },
  {
    path: "followers",
    component: GithubFollowersComponent
  },
  {
    path: "todos",
    component: TodosComponent
  },
  {
    path: "zippy",
    component: ZippyComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
