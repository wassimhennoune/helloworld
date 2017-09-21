import { Component , OnInit } from "@angular/core";
import { DataBase } from "../../providers/database/database";
import { TnsSideDrawer } from 'nativescript-sidedrawer';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "appointDetails",
  templateUrl: "pages/appointDetails/appointDetails.html"
})

export class AppointDetailsComponent implements OnInit{

    id: string;
    constructor(private route: ActivatedRoute,
                private database : DataBase) {
      this.route.params
        .forEach((params) => { this.id = params["id"]; });
    }
  ngOnInit(){
    console.log("id : "+ this.id);
  }

}