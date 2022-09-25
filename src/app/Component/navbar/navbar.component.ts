import { SampleService } from './../../sample.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus: any = [];
  constructor(private navbarService: NavbarService, private sampleService: SampleService) { 
    this.sampleService.notify.subscribe((result) => {
      console.log('result', result);
      let menus: any = localStorage.getItem('menus');
      this.menus = JSON.parse(menus);
    })  
  }

  ngOnInit(): void {
    let menus: any = localStorage.getItem('menus');
    this.menus = JSON.parse(menus);
  }                                              

  addMenu() {
    this.navbarService.getNavbar()
                      .subscribe()
  }
}
