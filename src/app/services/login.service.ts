import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiUrl;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
    private storage: Storage,
    private plt: Platform,
    private googlePlus: GooglePlus,
    ) { 
      this.plt.ready().then(() => {
        this.checkAuth();
      });
    }

  login(credentials) {
    return this.http.post(this.url+'login/', credentials)
      .pipe(
        tap(res => {
          if(res['status']=="true"){
            this.storage.set('inicioSesion', true);
            this.authenticationState.next(true);

          }else{
            this.alertController.create({
              header: 'Usuario o Contraseña incorrectos',
              cssClass:'alert',
              message: 'Por favor, ingrese sus creedenciales nuevamente',
              buttons: ['Aceptar']
            }).then(res => {
              res.present();    
            });
          }
        }),
        catchError(e => {
          console.log(e.error.msg);           
          throw new Error(e);
        })
      );    
  }

  loginGoogle(){
    /*const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);*/
  
    this.googlePlus.login({
      /*'scopes': '',
      'webClientId': 'webClientId.apps.googleusercontent.com',
      'offline': true */
    })
    .then(user =>{
      this.storage.set('inicioGoogle', true);
      this.authenticationState.next(true);
      //loading.dismiss();
  
      /*this.nativeStorage.setItem('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() =>{
        this.router.navigate(["/user"]);
      }, error =>{
        console.log(error);
      })
      loading.dismiss();*/
    }, err =>{
      console.log(err)
      //loading.dismiss();
      this.alertController.create({
        header: 'Error',
        cssClass:'alert',
        message: err,
        buttons: ['Aceptar']
      }).then(res => {
        res.present();    
      });
    });
  
    /*async presentLoading(loading) {
      return await loading.present();
    }*/
  }

  logout() {
    this.storage.remove('inicioSesion');
    this.authenticationState.next(false);
  }

  logoutGoogle(){
    this.storage.remove('inicioGoogle');
    this.authenticationState.next(false);
    this.googlePlus.logout();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  private checkAuth() {
    this.storage.get('inicioSesion').then(auth => {
      if (auth) {
        this.authenticationState.next(true);
      }else{
        this.storage.get('inicioGoogle').then(auth => {
          if (auth) {
            this.authenticationState.next(true);
          }else{
            this.authenticationState.next(false);
          }
        });
      }
    });
  }

}
