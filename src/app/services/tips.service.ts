import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  cargarTips(){
    return this.http.get(this.url+'tips/')
  }

  agregarTip(tip){
    console.log(tip);
    /*return this.http.post(this.url+'send_tips/', tip)
      .pipe(
        map(
          (response : any) => {
            this.alertController.create({
              header: 'Tip Cargado',
              cssClass:'alert',
              message: 'Su tip ha sido cargado exitosamente',
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
              message: 'No se pudo cargar su tip',
              buttons: ['Aceptar']
            }).then(res => {
              res.present();    
            });        
            throw new Error(e);
          })
      );*/ 
  }
}
