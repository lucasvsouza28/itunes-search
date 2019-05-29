import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'app/services';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;

  constructor(private route: ActivatedRoute
              , private searchService: SearchService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.searchService.getArtist(+params['id'])
            .then(data => {
              console.log(data);
              this.artist = data;
            });
      });
  }
}