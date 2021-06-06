import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';

import { PrintCardPageRoutingModule } from './print-card-routing.module';

import { PrintCardPage } from './print-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    PrintCardPageRoutingModule
  ],
  declarations: [PrintCardPage]
})
export class PrintCardPageModule {}
