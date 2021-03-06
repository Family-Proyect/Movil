import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  media = environment.media;
  params: string;
  itemListData = [];
  page_number = 0;
  page_limit = 12;
  counter: number = 0;


  constructor(
    private galeriaservice:GaleriaService,
  ) { }

  ngOnInit() {
      this.cargarGaleria(false, "");
  }

  cargarGaleria(isFirstLoad, event){
    this.params = '?_page=' + this.page_number + '&_limit=' + this.page_limit;
    this.galeriaservice.getGaleria(this.params).subscribe(
      (data:any)=>{
        for (let i = 0; i < data.length; i++) {
          this.itemListData.push(data[i]);
        }
        if(isFirstLoad)
          event.target.complete();
        this.page_number = this.page_limit;
        this.page_limit += 4;
      },error=>{
        console.error(error);
      });
  }

  scroll(event) {
    this.cargarGaleria(true, event);
  }

  addCounter(){
    this.counter++;
  }

}
