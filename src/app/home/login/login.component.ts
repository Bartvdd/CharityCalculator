import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../../data/user';

@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean;
  submitted: boolean;
  user: User;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private loginService:LoginService) {
    
  }

  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.getUser(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    if (this.user != undefined && this.user!=null) {
      this.loggedIn = true;
    }
  }

  getUser(username: string, password: string) {
    this.loginService.getUserByCredentials(username, password).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
