import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TestimonioService } from '../../services/testimonio.service';
import { ModalController } from '@ionic/angular';
import { NtestimonioPage } from '../ntestimonio/ntestimonio.page';

@Component({
  selector: 'app-testimonio',
  templateUrl: './testimonio.page.html',
  styleUrls: ['./testimonio.page.scss'],
})
export class TestimonioPage implements OnInit {
  public isAuth;
  public testimonios:any;

  constructor(
    private loginservice: LoginService,
    private testimonioservice: TestimonioService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loginservice.authenticationState.subscribe(state=>{
        this.isAuth = state;
    })

    this.testimonioservice.cargarTestimonios().subscribe(
      data => {
        this.testimonios = data;
      }
    );
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NtestimonioPage,
      swipeToClose: true,
      backdropDismiss: true,
      showBackdrop: true,
    });
    return await modal.present();
  }

}
