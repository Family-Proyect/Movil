import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  registro(datos){
    return this.http.post(this.url+'registro/', datos)
    .pipe(
      tap(res => {
        if(res['status']=="true"){
          this.alertController.create({
            header: 'Registro Exitoso',
            cssClass:'alert',
            message: 'Bienvenido, ahora podras ingresar y hacer uso de mas servicios.',
            buttons: ['Aceptar']
          }).then(res => {
            res.present();    
          });
        }else{
          this.alertController.create({
            header: 'Usuario ya registrado',
            cssClass:'alert',
            message: 'El ususario ya se encuentra registrado',
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
