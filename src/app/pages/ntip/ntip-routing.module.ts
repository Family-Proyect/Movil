import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NtipPage } from './ntip.page';

const routes: Routes = [
  {
    path: '',
    component: NtipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NtipPageRoutingModule {}
