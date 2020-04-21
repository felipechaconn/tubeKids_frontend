import { Component, OnInit } from '@angular/core';
import { KidService } from '../service/kid.service';
import { UserAuthService } from '../../../app/user/auth/user-auth.service';
import {
  faTrashAlt,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrls: ['./kid-list.component.css']
})
export class KidListComponent implements OnInit {
  kids:any = [];
  faTrashAlt =faTrashAlt;
  faPenAlt = faPencilAlt;
  constructor(
    private readonly _kidService: KidService,
    private readonly _userService: UserAuthService,
  ) { }
  
  
  ngOnInit(): void {
    this.getKid();
  }
  getKid() {
    //Esto llama al id del user ya que en el jwt no viene
    this._userService.getIdUserByEmail().subscribe(
      (res) => {
        if (res != undefined) {
          //Esto trae el video a partir del id
          this._kidService.getKid(res).subscribe(
            (res) => {
             this.kids =res;
             console.log(res);
            },
            (err) => console.log(err)
          );
        }
      },
      (err) => console.log(err)
    );
  }

  deleteVideo(idKid: string){
    this._kidService.deleteVideo(idKid).subscribe(
      res => {
        console.log(res);
        this.getKid();
      },
      err=> console.log(err)
    );
  }
}
