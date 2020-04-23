import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-two-factor-auth',
  templateUrl: './user-two-factor-auth.component.html',
  styleUrls: ['./user-two-factor-auth.component.css']
})
export class UserTwoFactorAuthComponent implements OnInit {
  verificationForm;
  constructor(
    private readonly _userService: UserAuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.verificationForm = new FormGroup({
      code_verify : new FormControl(''),
  })
   }

  ngOnInit(): void {
  }


  verification() {
    const userCode = this.verificationForm.value;
    console.log("Este es el video que voy a enviar", userCode);
    this._userService.twoFactorAuth(userCode);
  }
}
