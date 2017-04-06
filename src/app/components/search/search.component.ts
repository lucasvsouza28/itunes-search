import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Searchitem } from "app/models";
import { SearchService } from "app/services";

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading: boolean = false;
  private results: Searchitem[];
  private searchField: FormControl;

  constructor(private searchService: SearchService
    , private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['term']) {
        this.doSearch(params['term']);
      }
    });
  }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField
      .valueChanges
      .debounceTime(400)
      .filter(term => term.length > 4)
      .distinctUntilChanged()
      .do(() => this.loading = true)
      .switchMap(term => this.searchService.search(term))
      .subscribe(p => { this.results = p; this.loading = false; })
  }

  doSearch(term: string) {
    this.loading = true;
    this.searchService
      .search(term)
      .subscribe(
        d => this.results = d
        , error => console.log(error)
        , ()=> this.loading = false
      );
  }
}
