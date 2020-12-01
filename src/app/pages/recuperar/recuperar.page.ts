import { Component, OnInit } from '@angular/core';
import { RecuperarService } from '../../services/recuperar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correoForm: FormGroup;

  constructor(
    private recuperarservice:RecuperarService,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit() {
    this.correoForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
  }

  onSubmit() {
    if(this.correoForm.valid){
      this.recuperarservice.recuperar(this.correoForm.value).subscribe();
    }
  }

}
