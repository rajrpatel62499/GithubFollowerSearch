// import { combineLatest} from 'rxjs/Observable/combineLatest';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'src/app/services/github-followers.service';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/combineLatest';
import 'rxjs/Rx';
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
})
export class GithubFollowersComponent implements OnInit {

  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  //Okay when we need to subscribe to two observables then we should combine it by using combineLatest method of Observable
  // here we subscribe parameters and query paramters both so let's combine it to one observable;
  ngOnInit() {
    // 1st method [erro | in Progress]
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).map(combine => {
    //   console.log("into combined");
    //   console.log(combine[0]);
    //   console.log(combine[1].get('order'));
    //   return this.service.getAll();
    // })
    //   .subscribe(followers => {
    //     console.log(followers);
    //     this.followers = followers;

    //   });

    // 2nd method [working fine]

    this.route.paramMap.subscribe(response => {
      console.log(response);
    })
    this.route.queryParamMap.subscribe(params => {
      console.log("page : " + params.get('page'));
      console.log("order : " + params.get('order'));
    })


  }
  loadGithubFollowersContent(githubFollowerSearch: HTMLInputElement) {
    console.log(githubFollowerSearch.value);

    this.service.setUser(githubFollowerSearch.value);
    this.service.getAll().subscribe(followers => this.followers = followers);

  }
  haveFollowers() {
    if (this.followers)
      return true;
    else
      return false;
  }
}
