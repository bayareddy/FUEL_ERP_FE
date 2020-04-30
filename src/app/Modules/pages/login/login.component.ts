import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginError: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) { }

  public loginForm = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', Validators.required]
  })

  ngOnInit(): void {
  }
  goToSignUp(): void {
    this.router.navigate(['signup']);
  }
  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
<<<<<<< HEAD
    };
    this.router.navigate(['success']);
=======
    }
    else {
      this.apiService.login(this.loginForm.value).subscribe(data => {
        console.log("1111",data)
        localStorage.setItem('userToken', data);
        this.router.navigate(['main/home']);
      },(error:HttpErrorResponse)=>{
        this.loginError = true;
      })
    }
    this.router.navigate(['main/home']);
>>>>>>> 0ef4afd140262038c8aefd44aeafc022c35e2ee7
  }
}
