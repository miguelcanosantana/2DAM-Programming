import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'example-ngstyle',
    loadChildren: () => import('./pages/example-ngstyle/example-ngstyle.module').then( m => m.ExampleNgstylePageModule)
  },
  {
    path: 'example-ngclass',
    loadChildren: () => import('./pages/example-ngclass/example-ngclass.module').then( m => m.ExampleNgclassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
