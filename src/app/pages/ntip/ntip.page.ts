import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipsService } from '../../services/tips.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ntip',
  templateUrl: './ntip.page.html',
  styleUrls: ['./ntip.page.scss'],
})
export class NtipPage implements OnInit {
  tipForm: FormGroup;
  imageURL: string;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder, 
    private tipservice: TipsService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.tipForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      anonimo: ['false', []],
      name: ['', []],
      image: ['', []],
    });
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.tipForm.patchValue({
      image: file
    });
    this.tipForm.get('image').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    if(this.tipForm.valid){
      this.storage.get('usuario').then(usuario => {
        this.tipForm.controls["name"].setValue(usuario);
        console.log(this.tipForm.value)
        //this.tipservice.agregarTip(this.tipForm.value).subscribe(res=>{this.close()});  
      })
    }
  }

}
