import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewPacketPage } from './renew-packet.page';

const routes: Routes = [
  {
    path: '',
    component: RenewPacketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewPacketPageRoutingModule {}
