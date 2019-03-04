import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  inputLogin = '';
  inputPass = '';
  inputCheckPass = '';
  arrUsers = [];
  user = {
    login: '',
    password: ''
  };
  loading = false;
  isUserCorrect = false;
  constructor(private router: Router) {}
  checkLogin() {
    return this.inputLogin.length < 8;
  }
  checkPass() {
    return this.inputPass.length < 6;
  }
  addUser() {
    this.loading = true;
    setTimeout(() => {
      if (this.inputLogin.length >= 8 && this.inputPass.length >= 6 && this.inputPass === this.inputCheckPass) {
        this.user.login = this.inputLogin;
        this.user.password = this.inputPass;
        this.arrUsers.push(this.user);
        localStorage.setItem('users', JSON.stringify(this.arrUsers));
        this.loading = false;
        this.router.navigate(['/login']);
      } else {
        this.isUserCorrect = true; }}, 1500);
  }
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('users'))) {
      this.arrUsers = JSON.parse(localStorage.getItem('users'));
    }
  }
}
