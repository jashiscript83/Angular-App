import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  // buscar(termino: string) {
  //   console.log(termino);
    
  //   this.spotify.getArtist(termino).subscribe((data: any) => { console.log(data.artist.items); } );
  //   this.artistas = data.artist.items;
 
  // }
buscar(termino: string) {
  console.log(termino);
  this.loading = true;
 this.spotify.getArtists( termino ).subscribe((data: any ) => {console.log(data);
  this.artistas = data;
  this.loading = false;
} );


}
}