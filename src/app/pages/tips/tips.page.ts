import { Component, OnInit } from '@angular/core';
import { LoginService } from  '../../services/login.service';
import { TipsService } from  '../../services/tips.service';
import { environment } from '../../../environments/environment.prod';
import { ModalController } from '@ionic/angular';
import { NtipPage } from '../ntip/ntip.page';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {
  public isAuth;
  public tips:any;
  media = environment.media;

  constructor(
    private loginservice: LoginService,
    private tipsservice: TipsService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loginservice.authenticationState.subscribe(state=>{
      this.isAuth = state;
    });
    this.tipsservice.cargarTips().subscribe(
      data => {
        this.tips = data;
        console.log(data)
      }
    );
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NtipPage,
      swipeToClose: true,
      backdropDismiss: true,
      showBackdrop: true,
    });
    return await modal.present();
  }

}
