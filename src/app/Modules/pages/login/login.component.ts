import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) { }

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
    };
    this.router.navigate(['home']);
  }
}
