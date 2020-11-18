import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./pages/temas/temas.module').then( m => m.TemasPageModule)
  },
  {
    path: 'tema-detalle',
    loadChildren: () => import('./pages/tema-detalle/tema-detalle.module').then( m => m.TemaDetallePageModule)
  },
  {
    path: 'consejeria',
    loadChildren: () => import('./pages/consejeria/consejeria.module').then( m => m.ConsejeriaPageModule)
  },
  {
    path: 'donacion',
    loadChildren: () => import('./pages/donacion/donacion.module').then( m => m.DonacionPageModule)
  },
  {
    path: 'campanias',
    loadChildren: () => import('./pages/campanias/campanias.module').then( m => m.CampaniasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
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
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
