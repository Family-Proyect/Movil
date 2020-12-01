import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private registroservice:RegistroService,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['',[Validators.required, Validators.minLength(5)]],
      genero: ['',[Validators.required,]],
      fnac: ['',[Validators.required,]],
      contraseña: ['',[Validators.required, Validators.minLength(5)]],
      confirmContra: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if(this.registroForm.valid){
      this.registroservice.registro(this.registroForm.value).subscribe();
    }
  }

}
