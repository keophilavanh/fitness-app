import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { UserService } from "src/service/user.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.page.html",
  styleUrls: ["./user-add.page.scss"],
})
export class UserAddPage implements OnInit {
  public name: string;
  public username: string;
  public password: string;
  public role: string = 'admin';

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public loadingCtrl: LoadingController,
    private User: UserService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  keyname(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }

  keyusername(event: KeyboardEvent) {
    this.username = (event.target as HTMLInputElement).value;
  }

  keypassword(event: KeyboardEvent) {
    this.password = (event.target as HTMLInputElement).value;
  }
  keyrole(event: KeyboardEvent) {
    this.role = (event.target as HTMLInputElement).value;
  }

  async add(data: any) {
    console.log("test data", data);

    const loader = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    loader.present();

    this.User.adduser(data).subscribe(
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

    const data = {
      name: this.name,
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.add(data);
  }

  reload() {
    this.modalCtrl.dismiss({
      reload: true,
    });
  }
}
