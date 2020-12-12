import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleNgstylePageRoutingModule } from './example-ngstyle-routing.module';

import { ExampleNgstylePage } from './example-ngstyle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleNgstylePageRoutingModule
  ],
  declarations: [ExampleNgstylePage]
})
export class ExampleNgstylePageModule {}
