import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonioPage } from './testimonio.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonioPageRoutingModule {}
