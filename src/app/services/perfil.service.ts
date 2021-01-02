import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  cargarPerfil(params){
    return this.http.get(this.url+'get_profile'+params)
  }

  actualizarPerfil(perfil){//ruta aqui
    return this.http.post(this.url+'update_profile/', perfil)
    .pipe(
      map(
        (response : any) => {
          this.alertController.create({
            header: 'Testimonio Cargado',
            cssClass:'alert',
            message: 'Su perfil ha sido actualizado',
            buttons: ['Aceptar']
          }).then(res => {
            res.present();    
          });
        }
        ),
        catchError(e => {
          this.alertController.create({
            header: 'Error',
            cssClass:'alert',
            message: 'No se pudo actualizar su perfil',
            buttons: ['Aceptar']
          }).then(res => {
            res.present();    
          });        
          throw new Error(e);
        })
    );
  }

}
