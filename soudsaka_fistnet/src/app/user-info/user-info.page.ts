import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { UserService } from "src/service/user.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.page.html",
  styleUrls: ["./user-info.page.scss"],
})
export class UserInfoPage implements OnInit {
  @Input() table: any;
  public name: string;
  public username: string;
  public password: string;
  public role: string;
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public loadingCtrl: LoadingController,
    private UserService: UserService
  ) {}

  ngOnInit() {
    this.name = this.table.name;
    this.username = this.table.username;
    this.password = this.table.password;
    this.role = this.table.role;
    console.log(this.table);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  keyname(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }
  rolename(event: KeyboardEvent) {
    this.role = (event.target as HTMLInputElement).value;
  }

  keyusername(event: KeyboardEvent) {
    this.username = (event.target as HTMLInputElement).value;
  }

  keypassword(event: KeyboardEvent) {
    this.password = (event.target as HTMLInputElement).value;
  }

  async save() {
    if (!this.username || !this.password || !this.name) {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "ບໍ່ມີຂໍ້ມູນ",

        message: "ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ",
        buttons: ["OK"],
      });

      await alert.present();

      return;
    }
    this.table.name = this.name;
    this.table.username = this.username;
    this.table.password = this.password;
    this.table.role = this.role;
    this.update(this.table);
  }
  async update(data: any) {
    const loader = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    loader.present();

    this.UserService.updateuser(data).subscribe(
      (res) => {
        console.log(res);

        loader.dismiss();
        this.reload();
      },
      (err) => {
        console.log(err);
        loader.dismiss();
      }
    );
  }

  async remove() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: "Message <strong>ລົບຂໍ້ມູນ</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.delete(this.table);
          },
        },
      ],
    });

    await alert.present();
  }

  async delete(data: any) {
    const loader = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    loader.present();

    this.UserService.deleteuser(data).subscribe(
      (res) => {
        console.log(res);

        loader.dismiss();
        this.reload();
      },
      (err) => {
        console.log(err);
        loader.dismiss();
      }
    );
  }

  reload() {
    this.modalCtrl.dismiss({
      reload: true,
    });
  }
}
