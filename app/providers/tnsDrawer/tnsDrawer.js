"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var TnsDrawer = (function () {
    function TnsDrawer() {
        this.buildDrawer();
    }
    TnsDrawer.prototype.buildDrawer = function () {
        var _this = this;
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            templates: [{
                    title: 'Home',
                    androidIcon: null,
                    iosIcon: null,
                }],
            title: 'This App Name',
            subtitle: 'is just as awesome as this subtitle!',
            listener: function (index) {
                _this.i = index;
            },
            context: this,
        });
    };
    TnsDrawer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TnsDrawer);
    return TnsDrawer;
}());
exports.TnsDrawer = TnsDrawer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG5zRHJhd2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG5zRHJhd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLG1FQUF3RDtBQUl4RDtJQUtJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUFBLGlCQWNHO1FBYkMsdUNBQWEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsU0FBUyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLE1BQU07b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUM7WUFDRixLQUFLLEVBQUUsZUFBZTtZQUN0QixRQUFRLEVBQUUsc0NBQXNDO1lBQ2hELFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2QsS0FBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUE7WUFDaEIsQ0FBQztZQUNELE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZCTSxTQUFTO1FBRnJCLGlCQUFVLEVBQUU7O09BRUEsU0FBUyxDQTBCckI7SUFBRCxnQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFRuc0RyYXdlciB7XHJcblxyXG4gICBcclxuXHJcbiAgICBwcml2YXRlIGkgOiBudW1iZXIgO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYnVpbGREcmF3ZXIoKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGREcmF3ZXIoKSAge1xyXG4gICAgICAgIFRuc1NpZGVEcmF3ZXIuYnVpbGQoe1xyXG4gICAgICAgICAgdGVtcGxhdGVzOiBbe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnLFxyXG4gICAgICAgICAgICBhbmRyb2lkSWNvbjogbnVsbCxcclxuICAgICAgICAgICAgaW9zSWNvbjogbnVsbCxcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgdGl0bGU6ICdUaGlzIEFwcCBOYW1lJyxcclxuICAgICAgICAgIHN1YnRpdGxlOiAnaXMganVzdCBhcyBhd2Vzb21lIGFzIHRoaXMgc3VidGl0bGUhJyxcclxuICAgICAgICAgIGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pID0gaW5kZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZXh0OiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==