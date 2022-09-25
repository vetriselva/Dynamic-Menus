import { SampleService } from './sample.service';
import { NavbarService } from 'src/app/Service/navbar.service';
import { EventEmitter, Injectable, Output } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private navbarService: NavbarService , private sampleService: SampleService) { }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 200) {
          localStorage.removeItem('menus');
          localStorage.setItem('menus', JSON.stringify([
            {'name': 'Contact', 'path': 'contact'},
            {'name': 'Home', 'path': 'Home'},
          ]));
          this.sampleService.onNotify(true)
        }
      })
    );
  }

}