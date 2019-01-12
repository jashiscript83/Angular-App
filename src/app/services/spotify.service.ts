import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) { console.log('service listo!'); }

  getQuery (query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQABSpohSn-lCQ81WMOJa2BK9xxWIMzkRfCDpZUxCTRWM2doa_ROcYnAndBeGnwcCWBvisZjoeig4B0t-mg' });
      return this.http.get(url, { headers} );
  }

getNewReleases() {
  return this.getQuery('browse/new-releases')
  .pipe( map( data => data['albums'].items
  ));
}

getArtists(termino: string) {

  return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=15`)
  .pipe( map( ( data: any ) => data['artists'].items ));

  // const headers = new HttpHeaders ({
  //   'Authorization' : 'Bearer BQAlxZUA2Qi-f7L9jjFrfY7Rz16OX1BffQ5c8xs075s-X3icmKdRhMLmtKqEK4fIvlkKM0jVFptSaH1Q4RA'

  // });

  //   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=15`, { headers}  )
  //   .pipe( map( ( data: any ) => data['artists'].items
  //   ));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe( map( ( data: any ) => data['artists'].items ));
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( ( data: any ) => data['tracks']));
      }



}


