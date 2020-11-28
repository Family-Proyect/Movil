import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  recuperar(correo){
    return this.http.post(this.url+'recuperar_contrasenia/', correo)
    .pipe(
      tap(res => {
        if(res['status']=="true"){
          this.alertController.create({
            header: 'Recuperacion Exitosa',
            cssClass:'alert',
            message: 'Por favor, revise su correo electronico para recuperar su contraseña',
            buttons: ['Aceptar']
          }).then(res => {
            res.present();    
          });
        }else{
          this.alertController.create({
            header: 'Usuario o Contraseña incorrectos',
            cssClass:'alert',
            message: 'El ususario no se encuentra registrado',
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
}
