import { Component, OnInit, HostBinding } from "@angular/core";
import { VideoService } from "../../videos/service/video.service";
import { UserAuthService } from "../../user/auth/user-auth.service";
import {
  faTrashAlt,
  faEnvelope,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"],
})
export class VideoListComponent implements OnInit {
  @HostBinding('class') classes='row'
  faTrashAlt =faTrashAlt;
  videos:any = [];
  constructor(
    private readonly _videoService: VideoService,
    private readonly _userService: UserAuthService,
    public sanitizer: DomSanitizer
  ) {}
  

  ngOnInit(): void {
   this.getVideo();
  }

  getVideo() {
    //Esto llama al id del user ya que en el jwt no viene
    this._userService.getIdUserByEmail().subscribe(
      (res) => {
        if (res != undefined) {
          //Esto trae el video a partir del id
          this._videoService.getVideo(res).subscribe(
            (res) => {
             this.videos =res;
             console.log(res);
            },
            (err) => console.log(err)
          );
        }
      },
      (err) => console.log(err)
    );
  }
  deleteVideo(id: string){
    this._videoService.deleteVideo(id).subscribe(
      res => {
        console.log(res);
        this.getVideo();
      },
      err=> console.log(err)
    );
  }
  //Esto busca el video por medio del id del usuario
  // getVideos() {
  //  let id=  this.getIdUser();
  //   this._videoService.getVideo(this.idUser).subscribe(
  //     (res) => {
  //      this.videos =res;
  //      console.log(res);
  //     },
  //     (err) => console.log(err)
  //   );
  // }
}
