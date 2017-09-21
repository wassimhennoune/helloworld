"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("../../providers/database/database");
var tnsDrawer_1 = require("../../providers/tnsDrawer/tnsDrawer");
var router_1 = require("@angular/router");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var HomeComponent = (function () {
    function HomeComponent(database, tnsDrawer, router, fonticon) {
        this.database = database;
        this.tnsDrawer = tnsDrawer;
        this.router = router;
        this.fonticon = fonticon;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/home/home.html",
            styleUrls: ["pages/home/home.css"]
        }),
        __metadata("design:paramtypes", [database_1.DataBase,
            tnsDrawer_1.TnsDrawer,
            router_1.Router,
            nativescript_ng2_fonticon_1.TNSFontIconService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4REFBNkQ7QUFDN0QsaUVBQWdFO0FBQ2hFLDBDQUF5QztBQUN6Qyx1RUFBK0Q7QUFRL0Q7SUFJRSx1QkFBMkIsUUFBbUIsRUFDbkIsU0FBcUIsRUFDckIsTUFBYyxFQUNkLFFBQTZCO1FBSDdCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFDeEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBWlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBQztTQUNwQyxDQUFDO3lDQU1zQyxtQkFBUTtZQUNQLHFCQUFTO1lBQ2IsZUFBTTtZQUNILDhDQUFrQjtPQVA3QyxhQUFhLENBZXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFCYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBUbnNEcmF3ZXIgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3Ruc0RyYXdlci90bnNEcmF3ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImhvbWVcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcInBhZ2VzL2hvbWUvaG9tZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBwcml2YXRlIGkgO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZSA6IERhdGFCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHRuc0RyYXdlciA6IFRuc0RyYXdlcixcclxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmb250aWNvbiA6IFROU0ZvbnRJY29uU2VydmljZSApe1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbiAgfVxyXG4gXHJcbiBcclxufSJdfQ==