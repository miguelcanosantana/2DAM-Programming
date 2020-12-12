import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleNgclassPage } from './example-ngclass.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleNgclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleNgclassPageRoutingModule {}
