import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintCardPage } from './print-card.page';

const routes: Routes = [
  {
    path: '',
    component: PrintCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintCardPageRoutingModule {}
