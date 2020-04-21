import { Component, OnInit, HostBinding } from '@angular/core';
import { Kid } from '../../../app/model/Kid';
import { KidService } from '../service/kid.service';
import { UserAuthService } from 'src/app/user/auth/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.css']
})
export class KidFormComponent implements OnInit {
  @HostBinding("class") classes= "row";

  kid: Kid = {
    id_kid: 0,
    firstName_kid: "",
    birthday_kid:null,
    username_kid: "",
    pin_kid: undefined ,
    creator: {},
  };
  edit: boolean = false;
  constructor(
    private readonly _kidService: KidService,
    private readonly _userService: UserAuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      //Inserto El Id del usuario a Video
      this._userService.getIdUserByEmail().subscribe(
        (res) => {
          this.kid.creator.id_user = res;
        },
        (err) => {
          console.log(err);
        }
      );

      //Revisa el url si trae parametros
      const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this._kidService.getKidById(params.id).subscribe(
        (res) => {
          console.log(res);
          //If have parameter, set true edit and set video value(res)
          this.kid = res;
          this.edit = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  saveNewkid() {
    delete this.kid.id_kid;
    console.log("Este es el video que voy a enviar", this.kid);
    this._kidService.addNewKid(this.kid).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/dashboard/kids"]);
      },
      (err) => console.log(err)
    );
  }

  //Este es el metodo de actualizar kid
  updateKid() {
    this._kidService.updateVideo(this.kid.id_kid, this.kid).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/dashboard/kids"]);
      },
      (err) => console.log(err)
    );
  }
}


