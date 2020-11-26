import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getGaleria(params){
    return this.http.get(this.url+'galeria_scroll/'+params);
  }
}
