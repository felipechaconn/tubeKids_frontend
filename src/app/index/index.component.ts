import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import{UserAuthService} from '../user/auth/user-auth.service';
import { User } from '../model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;  
  //viene desde angular core y sirve para encapsular desde ts
  @HostBinding('class') classes = 'row';
  user;
  constructor(
   private userAuthService: UserAuthService,
  private router: Router,
    private formbuilder: FormBuilder

  ) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      email_user :['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      firstName_user :['',Validators.required],
      lastName_user :['',Validators.required],
      password_user :['',Validators.required,Validators.minLength(6)],
      birthday_user:['',Validators.required],
      phone_user:['',[Validators.required,Validators.pattern('^[+][0-9 ]{11}')]],
    })
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls};


  saveNewUser() {
    this.submitted = true;
    if(this.registerForm.invalid){
      console.log(this.registerForm.errors);
    return;
    }
    const userData = this.registerForm.value;
    //esto se debe porque mi base de datos genera estos datos no los necesito.
    console.log(this.registerForm.value);
    this.userAuthService.registerUser(userData)
    //recoordar que en el service el metodo devuelve un subscribe un observable
    .subscribe(
    res=> {
     console.log(res);
      //esto nos envia a la ruta users
    this.router.navigate(['/user']);
    },
    err => console.error(err)
   )
  }

}
