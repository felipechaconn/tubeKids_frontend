import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { Video } from "../../../app/model/Video";
import { UserAuthService } from "src/app/user/auth/user-auth.service";
import { UserService } from "../../user/service/user.service";
@Injectable({
  providedIn: "root",
})
export class VideoService {
  //propiedad para no escribir siempre la api
  API_URI = "http://localhost:3000/api";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(
    private http: HttpClient,
    private readonly _userService: UserAuthService
  ) {}

  getVideo(userId: number) {
    let api = `${this.API_URI}/video/myvideo/${userId}`;
    return this.http
      .get(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getVideoById(videoId: number) {
    let api = `${this.API_URI}/video/${videoId}`;
    return this.http
      .get(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  addNewVideo(videoData: Video): Observable<Video> {
    
    console.log(videoData.creator);
    let api = `${this.API_URI}/video`;
    return this.http.post(api, videoData).pipe(
      tap((res: any) => {}),
      catchError(this.handleError)
    );
  }

  deleteVideo(idVideo: string) {
    let api = `${this.API_URI}/video/${idVideo}`;
    return this.http.delete(api);
  }

  updateVideo(idVideo: string | number, updatedVideo: Video): Observable<Video> {
    let api = `${this.API_URI}/video/${idVideo}`;

    return this.http.put(api, updatedVideo);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
