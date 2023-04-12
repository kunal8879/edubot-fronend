import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide : boolean = true;

  ngOnInit() {
  }

  constructor(private loginService: LoginService) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(loginForm: NgForm) {
    console.log(loginForm.value);
    
    // window.location.href = "/unanswered-questions";
    this.loginService.login(loginForm.value).subscribe( data => {
      console.log(data);
      if (data == true) {
        console.log("Login success");
        window.location.href = "/unanswered-questions";
      } else {
        console.log("Login failed");
      }
    });
  }
}
