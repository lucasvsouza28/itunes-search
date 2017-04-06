import { NgModule }      from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent, SearchComponent, ArtistComponent, ArtistTrackListComponent, ArtistAlbumListComponent } from 'app/components';

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent, children: [
        { path: '', redirectTo: 'tracks', pathMatch: 'full' },
        { path: 'tracks', component: ArtistTrackListComponent },
        { path: 'albums', component: ArtistAlbumListComponent }
    ] },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule ]
})
export class AppRoutingModule {  }