import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewPacketPageRoutingModule } from './renew-packet-routing.module';

import { RenewPacketPage } from './renew-packet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewPacketPageRoutingModule
  ],
  declarations: [RenewPacketPage]
})
export class RenewPacketPageModule {}
