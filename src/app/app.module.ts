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
  , HeaderComponent
} from './components/';
import { UserService } from "app/services/user.service";
import { OnlyLoggedInUsersGuard } from "app/services/only-logged-in-users-guard";
import { UnsearchedTermGuard } from "app/services/unsearched-term-guard";
import { ArtistVideosListComponent } from "app/components/artist-videos-list/artist-videos-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistVideosListComponent,
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
  bootstrap: [AppComponent],
  providers: [SearchService, UserService, AlwaysAuthGuard, OnlyLoggedInUsersGuard, UnsearchedTermGuard]
})
export class AppModule { }
