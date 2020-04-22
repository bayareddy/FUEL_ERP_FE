import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted: boolean;

  constructor(private router: Router, private fb: FormBuilder) { }

  public regForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: [''],
    Phone: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required]
  }, { validators: this.checkPasswords.bind(this) })

  ngOnInit(): void {
  }

  get f() { return this.regForm.controls; }

  registration(): void {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    };
    this.router.navigate(['home']);
  }
  
  keyPressText(event: any) {
    const pattern = /^[a-zA-Z ]*$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPressNumber(event: any) {
    const pattern = /^[0-9]*$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  goToLogin(): void {
    this.router.navigate(['']);
  }

  checkPasswords(formGroup: FormGroup) {
    const { value: Password } = formGroup.get('Password');
    const { value: ConfirmPassword } = formGroup.get('ConfirmPassword');
    return Password === ConfirmPassword ? null : {notMatch:true};
  }

}
