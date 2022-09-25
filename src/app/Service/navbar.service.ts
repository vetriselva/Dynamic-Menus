import { NavbarComponent } from './../Component/navbar/navbar.component';
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INavbar } from '../Component/navbar/navbar';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _url = '/assets/data/navbar.json';

  constructor(private http: HttpClient) { }

  getNavbar ():Observable<INavbar>{
    return this.http.get<INavbar>(this._url);
  }
}
