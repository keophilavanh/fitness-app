import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenberManagePage } from './menber-manage.page';

const routes: Routes = [
  {
    path: '',
    component: MenberManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenberManagePageRoutingModule {}
