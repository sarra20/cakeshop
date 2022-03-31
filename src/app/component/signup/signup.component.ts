import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/Validators/MustMatche';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  isValid: boolean = false;
  emailErr: string;
  constructor( private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {  this.signupForm = this.formBuilder.group({
    firstName: ['', [Validators.minLength(5), Validators.required]],
    lastName: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    pwd: ['', [Validators.minLength(6), Validators.maxLength(12),
    Validators.required]],
    confirmPwd: ['']
  }, {
    validator: MustMatch('pwd', 'confirmPwd')
  })
  }
  signup(){

    console.log('Here user', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
       // this.router.navigate(['']);
        if (data.message == '0') {
          this.emailErr = "Email exists";
        } else {
          this.router.navigate(['']);
        }
      }
    );
  }

}
