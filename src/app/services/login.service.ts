import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiUrl;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
    private router: Router,
    ) { }

  login(credentials) {
    return this.http.post(this.url+'login/', credentials)
      .pipe(
        tap(res => {
          if(res['status']=="true"){
            this.authenticationState.next(true);
            this.router.navigate(['/temas']);
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
    this.authenticationState.next(false);
  }


}
