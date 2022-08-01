import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { MatIcon } from '@angular/material/icon';
@Component({
 
  selector: 'sd-navbar',
   templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
  }

}
