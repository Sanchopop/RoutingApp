import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  arrPhones = [{
    imgUrl: ''
  }];
  login = '';
  constructor(
    private http: HttpClient,
    private router: Router) {}
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  goToPage(id) {
    this.router.navigate(['/phone/' + id]);
  }
  ngOnInit() {
    return this.http.get('../../assets/phones.json')
      .subscribe(data => {
        this.arrPhones = Object.values(data);
      });
  }
}
