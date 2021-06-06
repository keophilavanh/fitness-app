import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PacketService} from "src/service/packet.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-packet-add',
  templateUrl: './packet-add.page.html',
  styleUrls: ['./packet-add.page.scss'],
})
export class PacketAddPage implements OnInit {

  
  public packagename:string ;
  public description:string ;
  public price:number ;
  

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private PacketService:PacketService) { }

  ngOnInit() {
    
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.packagename = (event.target as HTMLInputElement).value;

  }

  keyprice(event: KeyboardEvent) {
    this.price = parseInt((event.target as HTMLInputElement).value) ;

  }

  keydescription(event: KeyboardEvent) {
    this.description = (event.target as HTMLInputElement).value;

  }



async  add(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.PacketService.addpackage(data).subscribe(
      res=>{

        console.log(res);
        
        loader.dismiss()
        this.reload();

      },
      err=>{
        console.log(err);
        loader.dismiss()
      }
    )
    
  }

async  save(){


    if(!this.packagename || !this.price ){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ປ້ອມຂໍ້ມູນບໍ່ຄົບ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    const data = {
      packagename:this.packagename,
      price:this.price,
      description:this.description
    }
    console.log(data);
    
    this.add(data)

    
  }

  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}
