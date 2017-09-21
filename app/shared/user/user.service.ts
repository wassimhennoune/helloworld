import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
//import { Config } from "../config";

@Injectable()
export class UserService {

  private serverUrl = "http://192.168.1.26:3000/wassim";
  constructor(private http: Http) {}

  register(user: User) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      "http://192.168.1.26:3000/get",
     JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  postData(data: any) {
    let options = this.createRequestOptions();
    return this.http.post(this.serverUrl, { data }, options)
        .map(res => res.json());
}

private createRequestOptions() {
    let headers = new Headers();
    headers.append("AuthKey", "my-key");
    headers.append("AuthToken", "my-token");
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return options;
}

getData() {
  console.log("getDate");
   let headers = this.createRequestHeader();
  return this.http.get(this.serverUrl, { headers: headers })
      .map(res => res.json());
}

getResponseInfo() {
  let headers = this.createRequestHeader();
  return this.http.get(this.serverUrl, { headers: headers })
      .do(res => res);
}

private createRequestHeader() {
  let headers = new Headers();
  // set headers here e.g.
  headers.append("AuthKey", "my-key");
  headers.append("AuthToken", "my-token");
  headers.append("Content-Type", "application/json");

  return headers;
}

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}