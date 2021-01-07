import { Injectable } from '@angular/core';


// headers y http
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ComicserviceService {


  url: string= "https://comicvine.gamespot.com/api";
  apikey:string = "a1707107ceb812902da990e10888e00660681267";

  constructor(private _http: HttpClient) {

   }

  ObtenerListadoComics() {
    let url = `${this.url}/issues/?format=json&api_key=${this.apikey}&limit=60`;
    return this._http.get(url).pipe(map(resp =>resp));
  }
  ObtenerListadoPersonajes() {
    let url = `${this.url}/characters/?format=json&api_key=${this.apikey}&limit=100`;
    return this._http.get(url).pipe(map(resp =>resp));
  }

  ObtenerComic(numero:number){
    let url = `${this.url}/issue/4000-${numero}/?api_key=${this.apikey}&format=json&limit=1`;
    return this._http.get(url).pipe(map(resp => resp));
  }

  ObtenerPersonaje(numero:number){
    let url = `${this.url}/character/4005-${numero}/?api_key=${this.apikey}&format=json&limit=1`;
    return this._http.get(url).pipe(map(resp => resp));
  }

 buscador(palabra:number){
    let url = `${this.url}/search/?query=${palabra}&api_key=${this.apikey}&format=json`;
    return this._http.get(url).pipe(map(resp => resp));
  }

  }

