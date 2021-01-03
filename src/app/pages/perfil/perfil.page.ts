import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  params: string;
  type: string;
  perfilForm: FormGroup;

  constructor(
    private perfilservice: PerfilService,
    private storage: Storage,
    private formBuilder: FormBuilder, 
  ) { }

  ionViewWillEnter() {
    this.storage.get('username').then(username => {
      this.params = '?id=' + username;
      this.perfilservice.cargarPerfil(this.params).subscribe(data => {
        this.usuario = data;
      });
    });
  }

  ngOnInit() {
    this.type = 'person';
    this.perfilForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      fnac: ['',[Validators.required,]],
      edad: ['',[]],
      user: ['',[]]
    });
  }

  onSubmit() {
    if(this.perfilForm.valid){
      this.storage.get('username').then(username => {
        var edad = this.perfilForm.value.fnac;
        edad = new Date(edad).getTime()
        var timeDiff = Math.abs(Date.now() - edad);
        var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        this.perfilForm.controls["edad"].setValue(age);
        this.perfilForm.controls["user"].setValue(username);
        this.perfilservice.actualizarPerfil(this.perfilForm.value).subscribe(data => {
          this.ionViewWillEnter();
        });
      })
    }
  }

  segmentChanged(event) {
    this.type = event.detail.value;
  }

}
