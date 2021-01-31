import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsejeriaService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  getConsejerias(){
    return this.http.get(this.url+'get_consejerias')
  }

  reservar(params){
    return this.http.post(this.url+'agendar_consejeria/', params)
      .pipe(
        map(
          (response : any) => {
            this.alertController.create({
              header: 'Solicitud Cargada',
              cssClass:'alert',
              message: 'Su horario ha sido separado',
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
              message: 'No se pudo asignar su horario',
              buttons: ['Aceptar']
            }).then(res => {
              res.present();    
            });        
            throw new Error(e);
          })
      );  
  }
    

}
