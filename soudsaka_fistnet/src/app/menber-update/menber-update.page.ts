import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MemberService} from "src/service/member.service";
import {PacketService } from "src/service/packet.service"
import { LoadingController } from '@ionic/angular';
import { APIService} from "src/service/api.service"


@Component({
  selector: 'app-menber-update',
  templateUrl: './menber-update.page.html',
  styleUrls: ['./menber-update.page.scss'],
})
export class MenberUpdatePage implements OnInit {

  @Input() item:any;

  public membername:string 
  public phonenumber:number
  public image:any
  public packageid:number
  public endpackage:string

  public packagelist:string
  public part:string

  constructor(private APIService:APIService,private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private MemberService:MemberService,private PacketService:PacketService ) { }

  ngOnInit() {

    this.membername = this.item.membername
    this.phonenumber = this.item.phonenumber;
    this.packageid = this.item.packageid;
    this.endpackage = this.item.endpackage;
    this.part = this.APIService.imageURL()

    this.loadpackage()
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keymembername(event: KeyboardEvent) {
    this.membername = (event.target as HTMLInputElement).value;

  }

  keyphonenumber(event: KeyboardEvent) {
    this.phonenumber = parseInt((event.target as HTMLInputElement).value) ;

  }

  async loadpackage(){
    const data={

      page:'',
      limit:'',
      keyword:''
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
  this.PacketService.packagelist(data).subscribe(
    res=>{
      console.log(res);
      
          this.packagelist = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }




async  update(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.MemberService.updatemember(data).subscribe(
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


    if(!this.membername || !this.packageid || !this.phonenumber || !this.endpackage ){

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
      memberid:this.item.memberid,
      membername:this.membername,
      phonenumber:this.phonenumber,
      image:this.image?.img,
      packageid:this.packageid,
      endpackage:this.endpackage
  
    }
    console.log(data);
    
    this.update(data)

    
  }

  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }


  changeFileListener(event){
    console.log(event);
    if(event.target.files.length){
      console.log('files',event.target.files);
      this.handleReaderLoaded(event);
    }
    
  }

  handleReaderLoaded(e) {
    console.log(e);
 
   var file = e.target.files[0];
   var myReader: FileReader = new FileReader();
 

   console.log('image');
   // console.log(this.base64textString2);
   myReader.onloadend = (e) => {
     this.image = { name: file.name, type: file.type, lastModified: file.lastModified, size: file.size, img: myReader.result.toString()  };
     console.log(this.image);
   }
 
   myReader.readAsDataURL(file);
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

  this.MemberService.deletemember(data).subscribe(
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


}
