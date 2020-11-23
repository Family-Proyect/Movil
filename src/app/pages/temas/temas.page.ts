import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/temas.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {
  media = environment.media;
  temas:any;

  constructor(private temasService: TemasService) { }

  ngOnInit() {
    this.temasService.cargarTemasPrincipales().subscribe(
      data => {
        this.temas = data;
        console.log(data);
      });
  }

}
