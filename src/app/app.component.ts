import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Temas',
      url: '/temas',
    },
    {
      title: 'Testimonios',
      url: '/testimonio',
    },
    {
      title: 'Tips',
      url: '/tips',
    },
    {
      title: 'Sugerencias',
      url: '/sugerencias',
    },
    {
      title: 'Galeria',
      url: '/galeria',
    },
    {
      title: 'Donaciones',
      url: '/donacion',
    },
    {
      title: 'Campañas',
      url: '/campanias',
    },
    {
      title: 'Perfil',
      url: '/perfil',
    },
    {
      title: 'Configuracion',
      url: '/configuracion',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginservice: LoginService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#00c6e4');
      //this.splashScreen.hide();
      this.iniciarSesion()
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  private iniciarSesion(){
    this.loginservice.authenticationState.subscribe(state=>{
      if(state){
        //this.getUsuario();
        this.router.navigate(['/temas']);
      }else{
        this.router.navigate(['/']);
      }
    })
  }

}
