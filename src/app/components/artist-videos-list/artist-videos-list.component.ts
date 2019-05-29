import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist-videos-list',
  templateUrl: './artist-videos-list.component.html',
  styleUrls: ['./artist-videos-list.component.css']
})
export class ArtistVideosListComponent implements OnInit {
  videos: any[];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params
      .subscribe(p => this.searchService.getArtistVideos(+p['id'])
      .then(d => {
        this.videos = d.slice(1);
        console.log(d);
      }));
  }

}