import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenberUpdatePageRoutingModule } from './menber-update-routing.module';

import { MenberUpdatePage } from './menber-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenberUpdatePageRoutingModule
  ],
  declarations: [MenberUpdatePage]
})
export class MenberUpdatePageModule {}
