import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'TESTING123'
    const reqClone = request.clone({
      setHeaders: {
        API_KEY,
      }
    })
    // console.log(reqClone);
    return next.handle(request);
    // return next.handle(request).pipe(
    //   tap((event:HttpEvent<any>)=>{
    //     if(event instanceof HttpResponse && event.status==201)
    //     {
    //       this.toastr.success("object Created.")
    //     }
    //   })
    // )
  }
}
