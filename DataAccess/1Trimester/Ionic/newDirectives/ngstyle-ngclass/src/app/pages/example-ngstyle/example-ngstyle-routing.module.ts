import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleNgstylePage } from './example-ngstyle.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleNgstylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleNgstylePageRoutingModule {}
