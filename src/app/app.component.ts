import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuth:boolean;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Temas',
      url: '/temas',
      wLogin: true,
    },
    {
      title: 'Testimonios',
      url: '/testimonio',
      wLogin: true,
    },
    {
      title: 'Tips',
      url: '/tips',
      wLogin: true,
    },
    {
      title: 'Sugerencias',
      url: '/sugerencias',
      wLogin: false,
    },
    {
      title: 'Galeria',
      url: '/galeria',
      wLogin: true,
    },
    {
      title: 'Consejeria',
      url: '/consejeria',
      wLogin: false,
    },
    {
      title: 'Donaciones',
      url: '/donacion',
      wLogin: false,
    },
    {
      title: 'Campañas',
      url: '/campanias',
      wLogin: false,
    },
    {
      title: 'Perfil',
      url: '/perfil',
      wLogin: false,
    },
    {
      title: 'Configuracion',
      url: '/configuracion',
      wLogin: false,
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginservice: LoginService,
    private router: Router,
    private storage: Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#00c6e4');
      //this.splashScreen.hide();
      this.iniciarSesion();
      this.checkAuth();
    });
  }
    
  ngOnInit() {
    this.checkAuth();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  menuOpened(){
    this.checkAuth();
  }
  menuClosed(){
    this.checkAuth();
  }

  public iniciarSesion(){
    this.loginservice.authenticationState.subscribe(state=>{
      if(state){
        //this.getUsuario();
        this.router.navigate(['/temas']);
      }else{
        this.router.navigate(['/temas']);
      }
    })
  }

  public goToLogin(){
    this.router.navigate(['/login']);
  }

  public checkAuth() {
    this.storage.get('inicioSesion').then(auth => {
      if (auth) {
        this.isAuth = true;
      }else{
        this.storage.get('inicioGoogle').then(googleAuth => {
          if (googleAuth) {
            this.isAuth = true;
          }else{
            this.isAuth = false;
          }
        });
      }
    });
  }

  public logout() {
    this.storage.get('inicioSesion').then(auth => {
      if (auth) {
        this.loginservice.logout();
      }else{
        this.storage.get('inicioGoogle').then(authGoogle => {
          if (authGoogle) {
            this.loginservice.logoutGoogle();
          }
        });
      }
    });
  }
}
