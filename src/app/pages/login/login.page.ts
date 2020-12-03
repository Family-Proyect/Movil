import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isKeyboardHide=true;
  credentialsForm: FormGroup;

  constructor(
    private keyboard:Keyboard, 
    private loginservice:LoginService,
    private formBuilder: FormBuilder, 
    private storage: Storage,
    ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ionViewWillEnter() {
    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
      // console.log('HIDEK');
    });
  }

  onSubmit() {
    if(this.credentialsForm.valid){
      this.loginservice.login(this.credentialsForm.value).subscribe();
    }
  }

  googeLogin(){
    this.loginservice.loginGoogle();
  }
}
