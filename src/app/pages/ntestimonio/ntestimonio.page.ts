import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestimonioService } from '../../services/testimonio.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-ntestimonio',
  templateUrl: './ntestimonio.page.html',
  styleUrls: ['./ntestimonio.page.scss'],
})
export class NtestimonioPage implements OnInit {
  testimonioForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder, 
    private testimonioservice: TestimonioService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.testimonioForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      anonimo: ['false', []],
      name: ['', []],
    });
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onSubmit() {
    if(this.testimonioForm.valid){
      this.storage.get('usuario').then(usuario => {
        this.testimonioForm.controls["name"].setValue(usuario);
        this.testimonioservice.agregarTestimonio(this.testimonioForm.value).subscribe(res=>{this.close()});  
      })
    }
  }

}
