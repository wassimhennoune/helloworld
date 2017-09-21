"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("../../providers/database/database");
var router_1 = require("@angular/router");
var AppointComponent = (function () {
    function AppointComponent(database, router) {
        this.database = database;
        this.router = router;
        this.appoints = [];
    }
    AppointComponent.prototype.ngOnInit = function () {
        this.loadAppoint();
    };
    AppointComponent.prototype.loadAppoint = function () {
        var _this = this;
        this.database.fetchAppoint().then(function (result) {
            _this.appoints = result;
        });
    };
    AppointComponent.prototype.selectAppont = function (i) {
        this.router.navigate(["/appointDetail/" + i]);
    };
    AppointComponent = __decorate([
        core_1.Component({
            selector: "appoint",
            templateUrl: "pages/appoint/appoint.html",
            styleUrls: ["pages/appoint/appoint.css"]
        }),
        __metadata("design:paramtypes", [database_1.DataBase,
            router_1.Router])
    ], AppointComponent);
    return AppointComponent;
}());
exports.AppointComponent = AppointComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBvaW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4REFBNkQ7QUFFN0QsMENBQXlDO0FBUXpDO0lBR0UsMEJBQTJCLFFBQW1CLEVBQ25CLE1BQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSCx1Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBcEJZLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBQztTQUMxQyxDQUFDO3lDQUtzQyxtQkFBUTtZQUNYLGVBQU07T0FKOUIsZ0JBQWdCLENBc0I1QjtJQUFELHVCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YUJhc2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcG9pbnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hcHBvaW50L2FwcG9pbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcInBhZ2VzL2FwcG9pbnQvYXBwb2ludC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBvaW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBwcml2YXRlIGFwcG9pbnRzIDogQXJyYXk8YW55PiA7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2UgOiBEYXRhQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciApe1xyXG4gICAgdGhpcy5hcHBvaW50cyA9IFtdO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5sb2FkQXBwb2ludCgpO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRBcHBvaW50KCl7XHJcbiAgICB0aGlzLmRhdGFiYXNlLmZldGNoQXBwb2ludCgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmFwcG9pbnRzID0gcmVzdWx0O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5zZWxlY3RBcHBvbnQoaSkge1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hcHBvaW50RGV0YWlsL1wiK2ldKTtcclxufVxyXG5cclxufSJdfQ==