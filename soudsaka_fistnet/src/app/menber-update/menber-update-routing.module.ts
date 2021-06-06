import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenberUpdatePage } from './menber-update.page';

const routes: Routes = [
  {
    path: '',
    component: MenberUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenberUpdatePageRoutingModule {}
