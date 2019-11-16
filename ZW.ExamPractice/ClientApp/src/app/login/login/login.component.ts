import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginInfo } from 'src/app/core/auth/user-login-info';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const userLoginInfo: UserLoginInfo = new UserLoginInfo();
    userLoginInfo.UserName = this.validateForm.controls['userName'].value;
    userLoginInfo.PassWord = this.validateForm.controls['password'].value;
    this.authService.login(userLoginInfo).subscribe(result => {
      console.log(result);
      if (this.authService.isLoggedIn) {
        this.router.navigate(['layout']);
      } else {
        alert('the UserName or Password was wrong!');
      }
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
