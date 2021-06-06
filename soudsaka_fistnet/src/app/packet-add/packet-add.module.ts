import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacketAddPageRoutingModule } from './packet-add-routing.module';

import { PacketAddPage } from './packet-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacketAddPageRoutingModule
  ],
  declarations: [PacketAddPage]
})
export class PacketAddPageModule {}
