import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenberAddPageRoutingModule } from './menber-add-routing.module';

import { MenberAddPage } from './menber-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenberAddPageRoutingModule
  ],
  declarations: [MenberAddPage]
})
export class MenberAddPageModule {}
