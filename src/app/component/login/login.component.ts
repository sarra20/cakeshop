import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msgError:string;
  user:any={};
  constructor(private formBuilder: FormBuilder,private router:Router,private UserService:UserService) { 
    
  }

  ngOnInit() { this.loginForm = this.formBuilder.group({
    email: [''],
    pwd: ['']
  });
  }
  login(){
  this.UserService.login(this.user).subscribe(
    (data)=>{  
      if(data.message !== '2'){
        this.msgError='Please check email/pwd'
      }
  else{ this.router.navigate(['']); }
}
  
  );
}
   
      
  
}
