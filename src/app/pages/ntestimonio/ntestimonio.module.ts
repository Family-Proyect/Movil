import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NtestimonioPageRoutingModule } from './ntestimonio-routing.module';

import { NtestimonioPage } from './ntestimonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NtestimonioPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NtestimonioPage]
})
export class NtestimonioPageModule {}
