import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicserviceService } from '../../services/comicservice.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

 num:number;
 historieta:any[]=[];

  constructor(private _comicS:ComicserviceService,private _ac:ActivatedRoute) { 
    this._ac.params.subscribe(resp => {
      this.num = resp.id;
      this.comic(this.num);
    });
  }

  ngOnInit() {
  }


  comic(numero:number){
    this._comicS.ObtenerComic(numero).subscribe((resp:any) => {
      this.historieta=resp.results
      console.log(this.historieta);
      return this.historieta;
      
    });
  }
}
