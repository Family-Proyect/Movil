import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/temas.service';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {
  media = environment.media;
  temas:any;

  constructor(
    private temasService: TemasService,
    private router: Router, 
    private dataService: DataService, 
    ) { }

  ngOnInit() {
    this.temasService.cargarTemasPrincipales().subscribe(
      data => {
        this.temas = data;
      });
  }

  verTema(tema){
    this.dataService.setData("tema", tema);
    this.router.navigate(['/tema-detalle/'+tema]);
  }

}
