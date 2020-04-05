import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{UserAuthService} from '../user/auth/user-auth.service';
import { User } from 'src/app/user/Model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  registerForm;
  //viene desde angular core y sirve para encapsular desde ts
  @HostBinding('class') classes = 'row';
  user;
  constructor(
   private userAuthService: UserAuthService,
    private router: Router,

  ) {
      this.registerForm = new FormGroup({
        email_user : new FormControl(''),
        firstName_user : new FormControl(''),
        lastName_user : new FormControl(''),
        password_user : new FormControl(''),
        birthday_user: new FormControl(Date),
    })
   }

  ngOnInit() {

  }


  saveNewUser() {
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
