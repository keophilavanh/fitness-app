import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-print-card',
  templateUrl: './print-card.page.html',
  styleUrls: ['./print-card.page.scss'],
})
export class PrintCardPage implements OnInit {

  @Input() public item:any;

  public date:string='';
  public username:string = localStorage.getItem('username');

  
  elementType = 'text';
  value:string

  constructor(
    private printer: Printer, 
    private modalCtrl:ModalController,
    public route:Router,
   
  ) { }

  ngOnInit() {
    this.value = this.item.memberid
  }

  close(){

    this.route.navigate(['/tabs/account'])
  }


  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

 

  print_to_driver(){
    this.printer.isAvailable().then(onSuccess =>{
      console.log(onSuccess);
      this.print()
      
    }, onError=>{
      console.log(onError);
    });
  }

  print(){
    let options: PrintOptions = {
      name: 'MyDocument',
      printer: 'ESC/POS Printer',
      duplex: true,
      orientation: 'portrait',
      monochrome: true,
      photo: true
      

    }

    let content = document.getElementById('printer').innerHTML;
   
    
    this.printer.print(content, options).then(onSuccess=>{
      console.log(onSuccess);
      
    }, onError=>{
      console.log(onError);
      alert('err')
    });
  }

}
