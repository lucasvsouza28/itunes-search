import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';


import { AppRoutingModule } from 'app/app-routing.module';

import { AppComponent } from './app.component';
import { SearchService, AlwaysAuthGuard } from './services';
import { HomeComponent
         , SearchComponent
         , ArtistComponent
         , ArtistTrackListComponent
         , ArtistAlbumListComponent
        , HeaderComponent } from './components/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [SearchService, AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
