import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { UserAuthService } from "../auth/user-auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private _authService: UserAuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this._authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}