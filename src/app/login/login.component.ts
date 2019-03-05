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
  arrCurrentUser = [];
  CurrentUser = {
    login: '',
    password: ''
  };
  constructor(private router: Router) {}
  checkLogin() {
    return this.inputLogin.length < 8;
  }
  checkPass() {
    return this.inputPass.length < 6;
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
  }
}
