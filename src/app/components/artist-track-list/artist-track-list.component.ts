import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from "app/services";

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  tracks: any[];

  constructor(private route: ActivatedRoute
              , private searchService: SearchService) {
    
  }

  ngOnInit() {
    this.route.parent.params
      .subscribe(p => this.searchService.getArtistTracks(+p['id']).then(d=> this.tracks = d.slice(1)));
  }

}
