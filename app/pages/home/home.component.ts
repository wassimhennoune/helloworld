import { Component , OnInit } from "@angular/core";
import { DataBase } from "../../providers/database/database";
import { TnsDrawer } from "../../providers/tnsDrawer/tnsDrawer";
import { Router } from "@angular/router";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: "home",
  templateUrl: "pages/home/home.html",
  styleUrls: [ "pages/home/home.css"]
})

export class HomeComponent implements OnInit{

  private i ;

  public constructor(private database : DataBase,
                     private tnsDrawer : TnsDrawer,
                     private router: Router,
                     private fonticon : TNSFontIconService ){
  }

  ngOnInit(){

  }
 
 
}