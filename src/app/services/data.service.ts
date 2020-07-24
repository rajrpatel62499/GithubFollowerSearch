import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

// import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  public githubUserUrl = "https://api.github.com/users/"
  public githubUser = 'abc';
  public url = this.githubUserUrl + this.githubUser + '/followers';
  constructor(private http: HttpClient) { }


  setUser(user: string) {
    this.githubUser = user;
    this.url = this.githubUserUrl + this.githubUser + '/followers';
  }

  getAll() {
    return this.http.get(this.url);
    // .map(response => response);
    // .catch(this.handleError);
  }

  get(id) {
    return this.http.get(this.url + '/' + id)
      .map(response => response)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response);
    // .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
