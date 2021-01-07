import { Component, OnInit } from '@angular/core';
import { ComicserviceService } from '../../services/comicservice.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  peopleList:any[]=[];
  
  constructor(private _comicS:ComicserviceService) { }

  ngOnInit() {
    this.listado();
  }


 listado(){
  this._comicS.ObtenerListadoPersonajes().subscribe(
      (resp:any) => {
       this.peopleList= resp.results;
       console.log(this.peopleList);
       return this.peopleList;
        
      }
    );
  }
}
