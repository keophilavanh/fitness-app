import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { MenberAddPage } from '../menber-add/menber-add.page';
import { MenberUpdatePage } from '../menber-update/menber-update.page';
import { MemberService } from "src/service/member.service"
import {PrintCardPage} from "../print-card/print-card.page"

@Component({
  selector: 'app-menber-manage',
  templateUrl: './menber-manage.page.html',
  styleUrls: ['./menber-manage.page.scss'],
})
export class MenberManagePage implements OnInit {

 
  public page:number=1
  public limit : number=10
  public keyword: string

  public list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private MemberService:MemberService) { }

  ngOnInit() {
    this.load()
  }

  async add() {
    const modal = await this.modalController.create({
      component: MenberAddPage,
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
      component: MenberUpdatePage,
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

    this.route.navigate(['/tabs/account'])
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
    
  this.MemberService.memberlist(data).subscribe(
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
    
      this.MemberService.memberlist(data).subscribe(
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


  async print(item:any) {
    const modal = await this.modalController.create({
      component: PrintCardPage,
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



  

}

