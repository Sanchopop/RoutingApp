import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare let toastr: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  arrPhones = [{
    imgUrl: ''
  }];
  arrPackPhones = [{
    imgUrl: ''
  }];
  login = '';
  count = 9;
  arrCheck = true;
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
  showMorePhones() {
    return this.http.get('../../assets/phones.json')
      .subscribe(data => {
        this.arrPackPhones = Object.values(data).slice(this.count, this.count += 9);
        this.arrPhones = this.arrPhones.concat(this.arrPackPhones);
        if (this.arrPackPhones.length < 1) {
          this.arrCheck = false;
        }
      });
  }
  ngOnInit() {
    return this.http.get('../../assets/phones.json')
      .subscribe(data => {
        this.arrPhones = Object.values(data).slice(0, this.count);
        toastr.success('Welcome!');
      });
  }
}
