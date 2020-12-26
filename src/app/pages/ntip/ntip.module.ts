import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NtipPageRoutingModule } from './ntip-routing.module';

import { NtipPage } from './ntip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NtipPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NtipPage]
})
export class NtipPageModule {}
