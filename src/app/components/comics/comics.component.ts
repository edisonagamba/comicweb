import { Component, OnInit } from '@angular/core';
import { ComicserviceService } from '../../services/comicservice.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicList:any[]=[];
  
  constructor(private _comicS:ComicserviceService) { }

  ngOnInit() {
    this.listado();
  }


 listado(){
  this._comicS.ObtenerListadoComics().subscribe(
      (resp:any) => {
       this.comicList= resp.results;
       console.log(this.comicList);
       return this.comicList;
        
      }
    );
  }


}
