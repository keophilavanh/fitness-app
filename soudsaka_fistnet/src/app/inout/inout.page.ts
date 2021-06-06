import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InoutService} from  "src/service/inout.service";
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.page.html',
  styleUrls: ['./inout.page.scss'],
})
export class InoutPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner,private inoutService:InoutService,public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  out(){

   
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     
      this.checkout(barcodeData.text)
     }).catch(err => {
         console.log('Error', err);
     });

  }

  in(){

    

    this.barcodeScanner.scan().then(barcodeData => {
      
      this.checkin(barcodeData.text)
     }).catch(err => {
         console.log('Error', err);
     });

  }

async  checkin(id){
    const data = {
    
        memberid:id
    }
 
    this.inoutService.checkin(data).subscribe(
      res=>{
        console.log(res);
        
        
      
        if(res.status == 0){
          setTimeout(() => {
            this.presentAlert('CheckIn')
          }, 1000);
          
        }
        
      },
      err=>{
       
        this.presentAlert('CheckIn')
      }
    )
  }

async  checkout(id){
    const data = {
    
        memberid:id
    }
  
    this.inoutService.checkout(data).subscribe(
      res=>{
        console.log(res);
      

        if(res.status == 0){
          setTimeout(() => {
            this.presentAlert('CheckOut')
          }, 1000);
          
        }
       
      },
      err=>{
      
        this.presentAlert('CheckOut')
      }
    )
  }

  async presentAlert(str:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ແຈ້ງເຕືອນ',
      subHeader: str,
      message: 'ດຳເນີນການບໍ່ສຳເລັດ.',
      buttons: ['OK']
    });

    await alert.present();

    alert.dismiss()
  }



}
