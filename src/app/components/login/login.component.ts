import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/accountService/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private accountService: AccountService ) { }

  model: User = new User();
  loginForm: FormGroup;
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(){
    if(this.loginForm.valid){
      this.model = Object.assign({}, this.loginForm.value);
    }
    this.accountService.login(this.model)
    console.log(this.accountService.isLoggedIn());
  }

}
