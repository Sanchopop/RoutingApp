import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputLogin = '';
  inputPass = '';
  arrUsers = [];
  loading = false;
  isUserCorrect = false;
  isLoginCorrect = false;
  isPasswordCorrect = false;
  isArrUsersCorrect = false;
  arrCurrentUser = [];
  CurrentUser = {
    login: '',
    password: ''
  };

  constructor(private router: Router) {}
  checkUsers() {
    this.arrUsers = JSON.parse(localStorage.getItem('users'));
    if (this.arrUsers === null) {
      this.isArrUsersCorrect = true;
    } else {this.isArrUsersCorrect = false; }
  }
  checkLogin() {
    if (this.inputLogin.length < 1) {
      this.isLoginCorrect = false;
      this.isUserCorrect = false;
    } else {
      if (this.inputLogin.length < 8) {
        this.isLoginCorrect = true;
      } else {
        this.isLoginCorrect = false;
        this.isUserCorrect = false;
      }
    }
  }
  checkPass() {
    if (this.inputPass.length < 1) {
      this.isPasswordCorrect = false;
      this.isUserCorrect = false;
    } else {
      if (this.inputPass.length < 6) {
        this.isPasswordCorrect = true;
      } else {
        this.isPasswordCorrect = false;
        this.isUserCorrect = false;
      }
    }
  }
  signUP() {
    this.router.navigate(['/registration']);
  }
  login() {
    this.loading = true;
    this.arrUsers = JSON.parse(localStorage.getItem('users'));
    this.arrUsers.forEach(item => {
      setTimeout(() => {
        if (this.inputLogin === item.login && this.inputPass === item.password) {
          this.loading = false;
          this.CurrentUser.login = this.inputLogin;
          this.CurrentUser.password = this.inputPass;
          this.arrCurrentUser.push(this.CurrentUser);
          localStorage.setItem('currentUser', JSON.stringify(this.arrCurrentUser));
          this.router.navigate(['/home-page']);
        } else {
          this.loading = false;
          this.isUserCorrect = true; }}, 1500);
    });
  }
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('users'))) {
      this.arrUsers = JSON.parse(localStorage.getItem('users'));
    }
    this.checkUsers();
  }
}
