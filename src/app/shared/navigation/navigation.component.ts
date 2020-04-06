import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faCoffee,
  faEnvelope,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { UserAuthService } from "src/app/user/auth/user-auth.service";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  loginForm;
  //icons
  faCoffee = faCoffee;
  faEnvelope = faEnvelope;
  faUserLock = faUserLock;

  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    this.loginForm = new FormGroup({
      email_user: new FormControl(""),
      password_user: new FormControl(""),
    });
  }

  submitLogin() {
    debugger;
    const userData = this.loginForm.value;
    //esto se debe porque mi base de datos genera estos datos no los necesito.
    console.log(this.loginForm.value);
    this.userAuthService.login(userData);
    //recoordar que en el service el metodo devuelve un subscribe un observable
  }

  isNotFound() {
    // return true if the current page is Index
    return this.router.url.match("^/index$");
  }
  isIndexView() {
    // return true if the current page is Index
    return this.router.url.match("^/explore$");
  }
  isRegisterVerigicationView() {
    // return true if the current page is Index
    return this.router.url.match("^/tubeKids/registration$");
  }
  isDashboardView() {
    // return true if the current page is home
    return this.router.url.match("^/dashboard$");
  }

  ngOnInit(): void {}
}
