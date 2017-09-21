import { Component , OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import {Page} from "ui/page";
import { DataBase } from "../../providers/database/database";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

var Sqlite = require("nativescript-sqlite");

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login.css"],
})

export class LoginComponent implements OnInit  {

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  user: User;
  private message : String ; 

  constructor(private router: Router ,
              private userService: UserService ,
              private page: Page ,
              private database : DataBase,
              private fonticon: TNSFontIconService) {
    this.user = new User();
  }
  
  /*submit()
  {
    this.userService.register(this.user);
    let wassim : number = Date.now();
    console.log(wassim.toString());
      this.database.insertDoctor({title : this.user.email , specialisation : "malabalish" , id_hospital : 69 }).then(result => {
      console.log("the id is : " + result.id);
    });
    this.database.insertAppoint({id_doctor : 1 , start_date : '2007-01-01 10:00:00' , end_date : '2017-01-01 10:00:00' , title :"consultation" }).then(result => {
      console.log("the id is : " + result.id);
    });
    this.router.navigate(["/home"]);
  }*/
  public submit() {
   this.router.navigate(["/home"]);
}

}