import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacketManagePageRoutingModule } from './packet-manage-routing.module';

import { PacketManagePage } from './packet-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacketManagePageRoutingModule
  ],
  declarations: [PacketManagePage]
})
export class PacketManagePageModule {}
