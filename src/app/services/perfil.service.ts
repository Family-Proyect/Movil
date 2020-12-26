import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  cargarPerfil(params){
    return this.http.get(this.url+'get_profile'+params)
  }
}
