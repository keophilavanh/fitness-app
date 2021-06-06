import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenberManagePageRoutingModule } from './menber-manage-routing.module';

import { MenberManagePage } from './menber-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenberManagePageRoutingModule
  ],
  declarations: [MenberManagePage]
})
export class MenberManagePageModule {}
