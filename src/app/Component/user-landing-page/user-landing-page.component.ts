import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { ShareService } from 'src/app/Services/share.service';
@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
 userDetails:any;
  constructor(public nav:NavbarServiceService ,public shared:ShareService) {}

  ngOnInit(): void {
   this.nav.show();
   this.shared.getUserProfile().subscribe(
    res=>{
     this.userDetails=res;
     console.log(this.userDetails);
     console.log(this.userDetails.UserId);
     localStorage.setItem('UserId',JSON.stringify(this.userDetails.UserId));
    },
    err =>{
     console.log(err);
    },
  );
  }

}
