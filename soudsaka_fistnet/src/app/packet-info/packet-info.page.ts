import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { PacketService} from "src/service/packet.service";

@Component({
  selector: 'app-packet-info',
  templateUrl: './packet-info.page.html',
  styleUrls: ['./packet-info.page.scss'],
})
export class PacketInfoPage implements OnInit {

  @Input() item:any;
  
  public packageid:number;
  public packagename:string ;
  public description:string ;
  public price:number ;


  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private PacketService:PacketService) { }

  ngOnInit() {
    
    console.log(this.item);

    this.packageid = this.item.packageid
    this.packagename = this.item.packagename;
    this.description = this.item.description;
    this.price = this.item.price;
  
    

    
    
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

async  save(){

    if(!this.packagename || !this.price || !this.description){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ຊື້ໂຕະບໍ່ມີຂໍ້ມູນ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    this.item.packagename = this.packagename;
    this.item.description = this.description;
    this.item.price = this.price;

    this.update(this.item)


   
  }




  async  update(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.PacketService.updatepackage(data).subscribe(
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


  async  remove(){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>ລົບຂໍ້ມູນ</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.delete(this.item)
          }
        }
      ]
    });

    await alert.present();

   

   


   
  }

  async  delete(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.PacketService.deletepackage(data).subscribe(
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



  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}