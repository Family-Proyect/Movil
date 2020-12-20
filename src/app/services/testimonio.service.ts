import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private alertController : AlertController,
  ) { }

  cargarTestimonios(){
    return this.http.get(this.url+'get_testimonios/')
  }

  agregarTestimonio(testimonio){
    return this.http.post(this.url+'send_testimonios/', testimonio)
      .pipe(
        map(
          (response : any) => {
            this.alertController.create({
              header: 'Testimonio Cargado',
              cssClass:'alert',
              message: 'Su testimonio ha sido cargado exitosamente',
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
              message: 'No se pudo cargar su testimonio',
              buttons: ['Aceptar']
            }).then(res => {
              res.present();    
            });        
            throw new Error(e);
          })
      );  
  }
}
