import { Component, OnInit, HostBinding } from "@angular/core";
import { Video } from "../../../app/model/Video";
import { User } from "../../../app/model/User";
import { VideoService } from "../service/video.service";
import { UserAuthService } from "../../user/auth/user-auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-video-form",
  templateUrl: "./video-form.component.html",
  styleUrls: ["./video-form.component.css"],
})
export class VideoFormComponent implements OnInit {
  //Hostbinding hace envolver el row
  @HostBinding("class") classes = "row";

  video: Video = {
    id_video: 0,
    name_video: "",
    description_video: "",
    link_video: "",
    creator: {},
  };
  edit: boolean = false;
  constructor(
    private readonly _videoService: VideoService,
    private readonly _userService: UserAuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const creatorId = this._userService.getIdUserByEmail();
    //Inserto El Id del usuario a Video
    creatorId.subscribe(
      (res) => {
        this.video.creator.id_user = res;
      },
      (err) => {
        console.log(err);
      }
    );

    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this._videoService.getVideoById(params.id).subscribe(
        (res) => {
          console.log(res);
          this.video = res;
          this.edit = true;
          //this.creator = res.creator;
          console.log("tttt", this.video.creator.id_user);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  saveNewVideo() {
    delete this.video.id_video;
    this.video.creator.id_user;
    console.log("Este es el video que voy a enviar", this.video);
    this._videoService.addNewVideo(this.video).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/dashboard"]);
      },
      (err) => console.log(err)
    );
  }

  //Este es el metodo de actualizar video
  updateVideo() {
    this._videoService.updateVideo(this.video.id_video, this.video).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
