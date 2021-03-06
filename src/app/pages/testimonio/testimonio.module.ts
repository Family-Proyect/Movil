import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonioPageRoutingModule } from './testimonio-routing.module';

import { TestimonioPage } from './testimonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonioPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TestimonioPage]
})
export class TestimonioPageModule {}
