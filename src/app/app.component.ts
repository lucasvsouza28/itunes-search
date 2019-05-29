import { Component, OnInit } from '@angular/core';
import { SearchService }  from './services/search.service';
import { Searchitem } from './models/searchitem';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  constructor(private searchService: SearchService){
  }  

  private loading: boolean = false;
  private results: Observable<Searchitem[]>;
  private searchField: FormControl;

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.results = this.searchField
      .valueChanges
      .debounceTime(400)
      .filter(term => term.length > 4)
      .distinctUntilChanged()
      .do(()=> this.loading = true)
      .switchMap(term => this.searchService.search(term))
      .do(()=> this.loading = false);
  }

  doSearch(term: string){
    this.loading = true;
    this.results = this.searchService.search(term);
  }
}
