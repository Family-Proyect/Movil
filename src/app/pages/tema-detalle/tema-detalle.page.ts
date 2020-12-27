import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TemasService } from '../../services/temas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { LoginService } from '../../services/login.service';

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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, 
    private temasService: TemasService,
    private youtube: YoutubeVideoPlayer,
    private loginservice: LoginService,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.loginservice.authenticationState.subscribe(state=>{
      this.isAuth = state;
    })
  }

  ionViewWillEnter() {
    var tema = this.route.snapshot.params['tema'];
    if (tema) {
      this.params = '?id=' + tema;
      this.temasService.cargarTemaID(this.params).subscribe(data =>{
        this.detalle = data;
        this.titulo = data[0]['titulo'];
        this.categoria = data[0]['tema_categoria_id'];
        console.log(data);
      });
      this.temasService.cargarImagesTemaID(this.params).subscribe(data =>{
        this.imagenes = data;
        this.nimg = JSON.parse(JSON.stringify(data)).length;
      });
      this.temasService.cargarVideosTemaID(this.params).subscribe(data =>{
        this.video = data[0]['url'];
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
      console.log(data)
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

}
