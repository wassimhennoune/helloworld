import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { AppointComponent } from "./pages/appoint/appoint.component";
import { AppointDetailsComponent } from "./pages/appointDetails/appointDetails.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "appoint", component: AppointComponent },
  { path: "appointDetail/:id", component: AppointDetailsComponent }
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  AppointComponent,
  AppointDetailsComponent
];