import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public username :string;
  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username')
  }

  isLogout(){
   localStorage.removeItem('token')
this.route.navigate(['/login'])
  }

  manage() {
    this.route.navigate(['./manage']);
  } 
  
  
  report_select() {
    this.route.navigate(['./tabs/Report-select']);
  } 

  service(){
    this.route.navigate(['./tabs/inout']);
  }


  menber() {
    this.route.navigate(['./menber-manage']);
  } 

  category_manage() {
    this.route.navigate(['./category-manage']);
  }

  }
  
