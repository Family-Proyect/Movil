import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'folder/Inbox',
    //redirectTo: 'login',
    redirectTo: 'temas',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'temas',
    loadChildren: () => import('./pages/temas/temas.module').then( m => m.TemasPageModule)
  },
  {
    path: 'temas/:id',
    loadChildren: () => import('./pages/temas/temas.module').then( m => m.TemasPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'tema-detalle',
    loadChildren: () => import('./pages/tema-detalle/tema-detalle.module').then( m => m.TemaDetallePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'consejeria',
    loadChildren: () => import('./pages/consejeria/consejeria.module').then( m => m.ConsejeriaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'donacion',
    loadChildren: () => import('./pages/donacion/donacion.module').then( m => m.DonacionPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'campanias',
    loadChildren: () => import('./pages/campanias/campanias.module').then( m => m.CampaniasPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'testimonio',
    loadChildren: () => import('./pages/testimonio/testimonio.module').then( m => m.TestimonioPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
