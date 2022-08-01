import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/Services/share.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginForm = this.fb.group({​​​​​
    EmailId: ['',[Validators.required,Validators.email]], 
    Password: ['', Validators.required]});
    submitted = false;
    get Password(){
      return this.LoginForm.get('Password');
    }
    get EmailId(){
      return this.LoginForm.get('EmailId');
      }
    get f() { return this.LoginForm.controls; }
  constructor(private nav:NavbarServiceService, private Service:ShareService, private fb:FormBuilder, private Http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
  
  }
    onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {return;}
    this.Service.userlogin(this.LoginForm.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token',res.token);
        console.log(res.token);
        alert("Login Successful");
        this.LoginForm.reset();
        //if(this.LoginForm.value.EmailId=='admin@admin.com')
        //this.router.navigate(['login/admin/dashboard']);
        //else
        //this.router.navigate(['login/user/dashboard']);
        
      },
      err =>{
        if(err.status==400)
        alert("Authentication Failed!! Invalid Credentails");
        else
        console.log(err);
      }
    );

    
  }
}
