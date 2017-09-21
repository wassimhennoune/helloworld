"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("../../providers/database/database");
var router_1 = require("@angular/router");
var AppointDetailsComponent = (function () {
    function AppointDetailsComponent(route, database) {
        var _this = this;
        this.route = route;
        this.database = database;
        this.route.params
            .forEach(function (params) { _this.id = params["id"]; });
    }
    AppointDetailsComponent.prototype.ngOnInit = function () {
        console.log("id : " + this.id);
    };
    AppointDetailsComponent = __decorate([
        core_1.Component({
            selector: "appointDetails",
            templateUrl: "pages/appointDetails/appointDetails.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            database_1.DataBase])
    ], AppointDetailsComponent);
    return AppointDetailsComponent;
}());
exports.AppointDetailsComponent = AppointDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludERldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwb2ludERldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELDhEQUE2RDtBQUU3RCwwQ0FBaUQ7QUFPakQ7SUFHSSxpQ0FBb0IsS0FBcUIsRUFDckIsUUFBbUI7UUFEdkMsaUJBSUM7UUFKbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsMENBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBVlUsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwwQ0FBMEM7U0FDeEQsQ0FBQzt5Q0FLNkIsdUJBQWM7WUFDVixtQkFBUTtPQUo5Qix1QkFBdUIsQ0FZbkM7SUFBRCw4QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFCYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcG9pbnREZXRhaWxzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYXBwb2ludERldGFpbHMvYXBwb2ludERldGFpbHMuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwb2ludERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhYmFzZSA6IERhdGFCYXNlKSB7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl07IH0pO1xyXG4gICAgfVxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImlkIDogXCIrIHRoaXMuaWQpO1xyXG4gIH1cclxuXHJcbn0iXX0=