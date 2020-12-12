import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleNgclassPageRoutingModule } from './example-ngclass-routing.module';

import { ExampleNgclassPage } from './example-ngclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleNgclassPageRoutingModule
  ],
  declarations: [ExampleNgclassPage]
})
export class ExampleNgclassPageModule {}
