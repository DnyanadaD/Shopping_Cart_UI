import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ShareService } from 'src/app/Services/share.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Models/UserDetails.model';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpform = new FormGroup({
    FirstName : new FormControl('', Validators.required),
    LastName : new FormControl,
    EmailId : new FormControl('',[Validators.required , Validators.email]),
    //address : new FormControl('',Validators.required),
    MobileNumber : new FormControl('' , [Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    Password : new FormControl('',Validators.required)
    
  });
  submitted=false;
  get FirstName() {
    return this.SignUpform.get('FirstName');
  }
  get LastName() {
    return this.SignUpform.get('LastName');
  }
  get EmailId() {
    return this.SignUpform.get('EmailId');
  }
  get MobileNumber() {
    return this.SignUpform.get('MobileNumber');
  }
  get Password() {
    return this.SignUpform.get('Password');
  }


  constructor(private shared:ShareService, private nav:NavbarServiceService, private fs:FooterService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.SignUpform.invalid) {
      return;
  }
  this.shared.addUserDetails(this.SignUpform.value).subscribe((result)=>{
  
});
alert("Sign Up Successful");
  this.SignUpform.reset();
  //this.router.navigate(['login']);
}
  

}
