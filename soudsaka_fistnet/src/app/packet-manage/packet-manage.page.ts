import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { PacketAddPage } from '../packet-add/packet-add.page';
import { PacketInfoPage } from '../packet-info/packet-info.page';
import { PacketService } from "src/service/packet.service"

@Component({
  selector: 'app-packet-manage',
  templateUrl: './packet-manage.page.html',
  styleUrls: ['./packet-manage.page.scss'],
})
export class PacketManagePage implements OnInit {


  public page:number=1
  public limit : number=10
  public keyword: string

  public list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private PacketService:PacketService) { }

  ngOnInit() {
    this.load()
  }

  async add() {
    const modal = await this.modalController.create({
      component: PacketAddPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'titel': 'Add Table',
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        console.log(res);
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.load();
        }
        
      }
    )
    
    return await modal.present();
  }

  async info(item:any) {
    const modal = await this.modalController.create({
      component: PacketInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': item,
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.load();
        }
        
      }
    )
    
    return await modal.present();
  }

  close(){

    this.route.navigate(['/manage'])
  }

  async load(){
    const data={

      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
  this.PacketService.packagelist(data).subscribe(
    res=>{
      console.log(res);
      
          this.list = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }

async  doInfinite(event) {
    
    const data={

      page:this.page+1,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
      this.PacketService.packagelist(data).subscribe(
        res=>{
          try {
            if (res.Data.length) {
              this.list = this.list.concat(res.Data);
              event.target.complete();
            }else{
              console.log('else');
              
              event.target.complete();
              event.target.disabled = true;
            }
          } catch (error) {
            event.target.complete();
            event.target.disabled = true;
          }
          loader.dismiss();
        },err=>{
          loader.dismiss();
        }
      )

   
  }


  

}
