import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable()
export class TieInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('token') != '') {
            let token = localStorage.getItem('token')
            let clone = req.clone({setHeaders : { 'Authorization' : 'Bearer '+token}})
            return next.handle(clone)
        }
        return next.handle(req)
    }

}