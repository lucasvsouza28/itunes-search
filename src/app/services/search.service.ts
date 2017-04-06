import { Injectable } from '@angular/core';
import { Http, JsonpModule, Jsonp } from '@angular/http';
import { Searchitem } from '../models/searchitem';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private jsonp: Jsonp, private http: Http) {
  }

  apiRoot: string = "https://itunes.apple.com/search/";
  results: Observable<Searchitem[]>;
  
  search1(term: string){
    let promise = new Promise((resolve, reject) => {
      let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiUrl)
        .toPromise()
        .then(
            res => {
              this.results = res.json().results.map(item => { return new Searchitem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId); });
            }
            , msg =>{ reject(msg); });
    });

    return promise;
  };

  search2(term: string): Observable<Searchitem[]>{
    let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiUrl).map(res =>{
      return res.json()
        .results
        .map(item => { return new Searchitem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId); });
    });
  };

  search(term: string): Observable<Searchitem[]> {
    let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiUrl).map(res =>{
      return res.json()
        .results
        .map(item => { return new Searchitem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId); });
    });
  };

  getArtist(id: number): Promise<any> {
    const url = `https://itunes.apple.com/lookup?id=${id}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url)
      .toPromise()
      .then(data => data.json().results[0])
      .catch(msg => msg.error || msg);
  };

  getArtistTracks(id: number): Promise<any[]> {
    const url = `https://itunes.apple.com/lookup?id=${id}&entity=song&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url)
      .toPromise()
      .then(data => data.json().results as any[])
      .catch(msg => msg.error || msg);
  }

  getArtistAlbums(id: number): Promise<any[]> {
    const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url)
      .toPromise()
      .then(data => data.json().results as any[])
      .catch(msg => msg.error || msg);
  }
}