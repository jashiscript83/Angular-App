import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  // paises: any[] = [];


  // constructor( private http: HttpClient) {


  //   console.log('constructor done!');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((res: any) => {this.paises = res; console.log(res);
  // });
  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(( data: any ) => {  this.nuevasCanciones = data; this.loading = false; },
    (errorServicio) => { console.log(errorServicio); this.mensajeError = errorServicio.error.error.message;
      this.error = true; this.loading = false; }
    );

}


}
