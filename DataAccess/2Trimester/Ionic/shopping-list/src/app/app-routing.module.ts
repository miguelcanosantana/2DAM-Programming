import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


//Define some const (load with lazy loading)
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);


//Routes (Are Json)
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
                              .then( m => m.HomePageModule),
                              canActivate: [AngularFireAuthGuard],
                              data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule),
                              canActivate: [AngularFireAuthGuard],
                              data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'create-item',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule),
                              canActivate: [AngularFireAuthGuard],
                              data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'edit-item/:id',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule),
                              canActivate: [AngularFireAuthGuard],
                              data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
