"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var database_1 = require("../../providers/database/database");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var Sqlite = require("nativescript-sqlite");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page, database, fonticon) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.database = database;
        this.fonticon = fonticon;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
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
    LoginComponent.prototype.submit = function () {
        this.router.navigate(["/home"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            page_1.Page,
            database_1.DataBase,
            nativescript_ng2_fonticon_1.TNSFontIconService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQUM3Qiw4REFBNkQ7QUFDN0QsdUVBQStEO0FBRS9ELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBUzVDO0lBU0Usd0JBQW9CLE1BQWMsRUFDZCxXQUF3QixFQUN4QixJQUFVLEVBQ1YsUUFBbUIsRUFDbkIsUUFBNEI7UUFKNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBYkQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBYUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksK0JBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBaENZLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQVc0QixlQUFNO1lBQ0QsMEJBQVc7WUFDbEIsV0FBSTtZQUNDLG1CQUFRO1lBQ1QsOENBQWtCO09BYnJDLGNBQWMsQ0FrQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IERhdGFCYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuXHJcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgcHJpdmF0ZSBtZXNzYWdlIDogU3RyaW5nIDsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlICxcclxuICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UgLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZGF0YWJhc2UgOiBEYXRhQmFzZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qc3VibWl0KClcclxuICB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcik7XHJcbiAgICBsZXQgd2Fzc2ltIDogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnNvbGUubG9nKHdhc3NpbS50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5kYXRhYmFzZS5pbnNlcnREb2N0b3Ioe3RpdGxlIDogdGhpcy51c2VyLmVtYWlsICwgc3BlY2lhbGlzYXRpb24gOiBcIm1hbGFiYWxpc2hcIiAsIGlkX2hvc3BpdGFsIDogNjkgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCBpcyA6IFwiICsgcmVzdWx0LmlkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhYmFzZS5pbnNlcnRBcHBvaW50KHtpZF9kb2N0b3IgOiAxICwgc3RhcnRfZGF0ZSA6ICcyMDA3LTAxLTAxIDEwOjAwOjAwJyAsIGVuZF9kYXRlIDogJzIwMTctMDEtMDEgMTA6MDA6MDAnICwgdGl0bGUgOlwiY29uc3VsdGF0aW9uXCIgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCBpcyA6IFwiICsgcmVzdWx0LmlkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xyXG4gIH0qL1xyXG4gIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxufVxyXG5cclxufSJdfQ==