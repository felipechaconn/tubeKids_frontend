import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faCoffee,
  faEnvelope,
  faUserLock,
  faUser,
  faUserPlus,
  faPlus,
  faSignInAlt,
  faSignOutAlt,
  faUserEdit,
  faBaby,
  faVideo,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";
import { UserAuthService } from "src/app/user/auth/user-auth.service";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  loginForm:  FormGroup;
  submitted = false;
  //icons
  faCoffee = faCoffee;
  faEnvelope = faEnvelope;
  faUserLock = faUserLock;
  faUser = faUser;
  faPlus =faPlus;
  faSignOutAlt =faSignOutAlt;
  faUserEdit= faUserEdit;
  faBaby =faBaby;
  faSignInAlt =faSignInAlt;
  faVideo = faVideo;
  faUserShield = faUserShield;

  constructor(
    private router: Router,
    private _userAuthService: UserAuthService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email_user: ['',Validators.required],
      password_user: ['', Validators.required]
    })
  }
   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls};

  submitLogin() {
    this.submitted = true;
    if(this.loginForm.invalid){
    return;
    }
    const userData = this.loginForm.value;
    //esto se debe porque mi base de datos genera estos datos no los necesito.
    console.log(this.loginForm.value);
    this._userAuthService.login(userData);
    document.getElementById('closeModalButton').click();
    //recoordar que en el service el metodo devuelve un subscribe un observable
  }

  submitLogOut() {
    this._userAuthService.doLogout();
  }
  refresh(): void {
    window.location.reload();
}

  isNotFound() {
    // return true if the current page is Index
    return this.router.url.match("^/index$");
  }
  isIndexView() {
    // return true if the current page is Index
    return this.router.url.match("^/explore$");
  }
  isAddVideoView() {
    // return true if the current page is Index
    return this.router.url.match("^/dashboard/videos/add");
  }
  isAddKidView() {
    // return true if the current page is Index
    return this.router.url.match("^/dashboard/add/kid");
  }

  isKidsView() {
    // return true if the current page is Index
    return this.router.url.match("^/dashboard/kids");
  }
  isRegisterVerigicationView() {
    // return true if the current page is Index
    return this.router.url.match("^/tubeKids/registration$");
  }
  isDashboardView() {
    // return true if the current page is home
    return this.router.url.match("^/dashboard/videos$");
    
  }
  isEditView(){
    // return true if the current page is home
    return this.router.url.match("^/dashboard/edit/video/:id$");
  }


}
