import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { DataBase } from "./providers/database/database";
import { TnsDrawer } from "./providers/tnsDrawer/tnsDrawer";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule.forRoot(routes),
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent],
  providers: [DataBase,TnsDrawer]
})
export class AppModule {}