import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaDetallePageRoutingModule } from './tema-detalle-routing.module';

import { TemaDetallePage } from './tema-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaDetallePageRoutingModule
  ],
  declarations: [TemaDetallePage]
})
export class TemaDetallePageModule {}
