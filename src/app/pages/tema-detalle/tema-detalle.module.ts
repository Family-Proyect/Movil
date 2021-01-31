import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaDetallePageRoutingModule } from './tema-detalle-routing.module';

import { TemaDetallePage } from './tema-detalle.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaDetallePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TemaDetallePage]
})
export class TemaDetallePageModule {}
