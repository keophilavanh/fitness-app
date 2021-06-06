import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }

  close(){

   
      this.route.navigate(['./tabs']);
    
  }

  packet() {
    this.route.navigate(['./packet-manage']);
  } 

  

  user() {
    this.route.navigate(['./user-manage']);
  } 

}
