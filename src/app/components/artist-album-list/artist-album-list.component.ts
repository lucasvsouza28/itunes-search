import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "app/services";

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  albums: any[];

  constructor(private route: ActivatedRoute
              , private searchService: SearchService) {}

  ngOnInit() {
    this.route.parent.params
      .subscribe(p => this.searchService.getArtistAlbums(+p['id']).then(d=> {
        this.albums = d.slice(1);
      }));
  }

}
