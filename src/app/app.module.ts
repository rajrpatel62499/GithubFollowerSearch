import { RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/common/home/home.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { GithubFollowersComponent } from './components/github/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github/github-profile/github-profile.component';
import { FooterComponent } from './components/common/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    GithubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ContactUsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HomeComponent
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
          path: "posts",
          component: PostsComponent
        },
        {
          path: "contact",
          component: ContactUsComponent
        },
        {
          path: "**",
          component: NotFoundComponent
        },
      ]
    )
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
