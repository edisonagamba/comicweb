import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicserviceService } from '../../services/comicservice.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  num:number;
  personaje:any[]=[];
 
   constructor(private _comicS:ComicserviceService,private _ac:ActivatedRoute) { 
     this._ac.params.subscribe(resp => {
       this.num = resp.id;
       this.person(this.num);
     });
   }
 
   ngOnInit() {
   }
 
 
   person(numero:number){
     this._comicS.ObtenerPersonaje(numero).subscribe((resp:any) => {
       this.personaje=resp.results
       console.log('personaje');
       
       console.log(this.personaje);
       return this.personaje;
       
     });
   }
}
