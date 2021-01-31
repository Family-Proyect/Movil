import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TemasService } from '../../services/temas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { LoginService } from '../../services/login.service';
import { ConsejeriaService } from '../../services/consejeria.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tema-detalle',
  templateUrl: './tema-detalle.page.html',
  styleUrls: ['./tema-detalle.page.scss'],
})
export class TemaDetallePage implements OnInit {
  params: string;
  detalle: any;
  categoria: number;
  imagenes: any;
  video: string;
  titulo: string;
  temas: any;
  nimg: number;
  consejerias: any;
  collapseC: string = "add-outline";
  collapseM: string = "add-outline";
  media = environment.media;
  public isAuth;
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    updateOnWindowResize: true,
    direction: 'horizontal',
  };
  consejeriaForm: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, 
    private temasService: TemasService,
    private youtube: YoutubeVideoPlayer,
    private loginservice: LoginService,
    private consejeriaservice: ConsejeriaService,
    private alertController : AlertController,
    private router: Router, 
    private formBuilder: FormBuilder, 
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.loginservice.authenticationState.subscribe(state=>{
      this.isAuth = state;
    });

    this.consejeriaForm = this.formBuilder.group({
      id: ['',[]],
      username: ['',[]],
    });
  }

  ionViewWillEnter() {
    var tema = this.route.snapshot.params['tema'];
    if (tema) {
      this.params = '?id=' + tema;
      this.temasService.cargarTemaID(this.params).subscribe(data =>{
        this.detalle = data;
        this.titulo = data[0]['titulo'];
        this.categoria = data[0]['tema_categoria_id'];
      });
      this.temasService.cargarImagesTemaID(this.params).subscribe(data =>{
        this.imagenes = data;
        this.nimg = JSON.parse(JSON.stringify(data)).length;
      });
      this.temasService.cargarVideosTemaID(this.params).subscribe(data =>{
        this.video = data[0]['url'];
      });
      this.consejeriaservice.getConsejerias().subscribe(data =>{
        this.consejerias = data;
      });
    }
  }

  abrirVideo(vid){
    this.youtube.openVideo(vid);
  }

  expandirC(collapseC){
    if(this.collapseC=="add-outline"){
      this.collapseC = "remove-outline";
    }else{
      this.collapseC = "add-outline";
    }
  }

  cargarMasTemas(categoria){
    this.params = '?id=' + categoria;
    this.temasService.cargarTemasCat(this.params).subscribe(data =>{
      this.temas = data;
    });
  }

  expandirM(collapseM){
    if(this.collapseM=="add-outline"){
      this.collapseM = "remove-outline";
      this.cargarMasTemas(this.categoria);
    }else{
      this.collapseM = "add-outline";
    }
  }

  verTema(tema){
    this.dataService.setData("tema", tema);
    this.router.navigate(['/tema-detalle/'+tema]);
  }

  selConsejeria(id){
    this.alertController.create({
      header: '¿Desea solicitar esta consejeria?',
      cssClass:'alert',
      message: 'Por favor, confirmar la reservacion de la consejeria',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.alertController.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.storage.get('username').then(username => {
              this.consejeriaForm.controls["id"].setValue(id);
              this.consejeriaForm.controls["username"].setValue(username);
              if(this.consejeriaForm.valid){
                this.consejeriaservice.reservar(this.consejeriaForm.value).subscribe(res => {this.ionViewWillEnter()});
              }
            });
          }
        }
      ]
    }).then(res => {
      res.present();    
    });
  }
}
