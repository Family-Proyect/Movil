import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsejeriaPageRoutingModule } from './consejeria-routing.module';

import { ConsejeriaPage } from './consejeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsejeriaPageRoutingModule
  ],
  declarations: [ConsejeriaPage]
})
export class ConsejeriaPageModule {}
