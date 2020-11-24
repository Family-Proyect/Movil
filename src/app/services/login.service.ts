import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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

  logout() {
    this.storage.remove('inicioSesion');
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  private checkAuth() {
    this.storage.get('inicioSesion').then(auth => {
      if (auth) {
        this.authenticationState.next(true);
      }else{
        this.authenticationState.next(false);
      }
    });
  }

}
