import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  cargarTemasPrincipales(){
    return this.http.get(this.url+'getPrincipalesTemas/')
  }

  cargarTemaID(params){
    return this.http.get(this.url+'tema_by_id/'+params)
  }

  cargarImagesTemaID(params){
    return this.http.get(this.url+'image_by_tema/'+params)
  }

  cargarVideosTemaID(params){
    return this.http.get(this.url+'videos_by_tema/'+params)
  }

  cargarTemasCat(params){
    return this.http.get(this.url+'tema_by_category/'+params)
  }
}
