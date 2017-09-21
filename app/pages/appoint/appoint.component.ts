import { Component , OnInit } from "@angular/core";
import { DataBase } from "../../providers/database/database";
import { TnsSideDrawer } from 'nativescript-sidedrawer';
import { Router } from "@angular/router";

@Component({
  selector: "appoint",
  templateUrl: "pages/appoint/appoint.html",
  styleUrls: [ "pages/appoint/appoint.css"]
})

export class AppointComponent implements OnInit{

  private appoints : Array<any> ;
  public constructor(private database : DataBase,
                     private router: Router ){
    this.appoints = [];
  }
  ngOnInit(){
    this.loadAppoint();

  }

  loadAppoint(){
    this.database.fetchAppoint().then(result => {
        this.appoints = result;
      });
  }

selectAppont(i) {
  this.router.navigate(["/appointDetail/"+i]);
}

}