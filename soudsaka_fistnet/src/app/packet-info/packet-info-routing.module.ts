import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacketInfoPage } from './packet-info.page';

const routes: Routes = [
  {
    path: '',
    component: PacketInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacketInfoPageRoutingModule {}
