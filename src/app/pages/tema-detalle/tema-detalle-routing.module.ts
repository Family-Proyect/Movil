import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaDetallePage } from './tema-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TemaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaDetallePageRoutingModule {}
