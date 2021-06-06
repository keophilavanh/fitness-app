import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacketManagePage } from './packet-manage.page';

const routes: Routes = [
  {
    path: '',
    component: PacketManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacketManagePageRoutingModule {}
