import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacketInfoPageRoutingModule } from './packet-info-routing.module';

import { PacketInfoPage } from './packet-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacketInfoPageRoutingModule
  ],
  declarations: [PacketInfoPage]
})
export class PacketInfoPageModule {}
