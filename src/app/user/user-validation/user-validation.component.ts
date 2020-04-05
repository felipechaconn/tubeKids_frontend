import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../auth/user-auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent implements OnInit {
  user_token : string;
  paramsSub: any
  constructor(private router:Router,private _userService: UserService, private _actRoute: ActivatedRoute) {
     }

  ngOnInit(): void{
    const token = this._actRoute.snapshot.queryParamMap.get('token');
  
      if(token){
        console.log('entra');
        this.validateUser();
      }
  }

  validateUser(){
    this._actRoute.queryParamMap.subscribe(params =>{
      this.user_token = params.get('token');
      if(this.user_token != null){
        const userToken = this.user_token;
        this._userService.validateUser(userToken).subscribe(
          res=> {
            console.log(res);
             //esto nos envia a la ruta users
           this.router.navigate(['dashboard']);
           },
           err => console.error(err)
          )
      }
    });
  }
   invalidUser() {
    return this.router.url.match('^/verification$');
   }
}
