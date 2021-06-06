import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacketAddPage } from './packet-add.page';

const routes: Routes = [
  {
    path: '',
    component: PacketAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacketAddPageRoutingModule {}
