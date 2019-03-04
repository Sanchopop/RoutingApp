import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.css']
})
export  class PhoneInfoComponent implements OnInit {
  arrPath = [];
  arrId = [];
  path = '';
  arrPhones = [];
  phone = {};
  constructor(
    private http: HttpClient,
    private router: Router) {}
  goToHomepage() {
    this.router.navigate(['/home-page']);
  }
  getId() {
    this.arrPath = window.location.toString().split('/');
    this.arrId = this.arrPath.slice(-1);
    this.path = this.arrId.join('');
  }
  getPhoneInfo() {
    for (let i = 0; i < this.arrPhones.length; i++) {
      if (this.arrPhones[i].id === this.path) {
        this.phone = this.arrPhones[i];
      }
    }
  }
  ngOnInit() {
    this.getId();
    return this.http.get('../../assets/phones.json')
      .subscribe(data => {
        this.arrPhones = Object.values(data);
        this.getPhoneInfo();
      });
  }
}
