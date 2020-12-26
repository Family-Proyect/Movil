import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  params: string;

  constructor(
    private perfilservice: PerfilService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('username').then(username => {
      this.params = '?id=' + username;
      this.perfilservice.cargarPerfil(this.params).subscribe(data => {
        this.usuario = data;
        console.log(data)
      });
    });
  }

}
