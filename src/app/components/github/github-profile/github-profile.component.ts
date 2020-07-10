import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
})

// angular destroy and create component when changes meantime ngOnInit and ngOnDestroy method called respectively
//but while passing the parameters or next button clicked it doesn't destroy and init the componet
// that's why we have to take those parameters using ActivatedRoute class objcet and then using paramMap[observable]
// we have to subscribe that data or json data then use it.
export class GithubProfileComponent implements OnInit, OnDestroy {

  private id: number;
  private service: DataService;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    console.log("Github profile destroy OnDestroy");

  }

  ngOnInit(): void {
    console.log("Github profile creates OnInit");
    this.id = +this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      console.log(params.get('username'));

    }
    );

  }




  submit() {
    this.router.navigate(['/followers'], { queryParams: { page: 2, oreder: 'newest' } })
  }

}
