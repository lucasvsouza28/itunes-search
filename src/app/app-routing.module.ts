import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent, SearchComponent, ArtistComponent, ArtistTrackListComponent, ArtistAlbumListComponent } from 'app/components';
import { AlwaysAuthGuard } from "app/services";
import { OnlyLoggedInUsersGuard } from "app/services/only-logged-in-users-guard";
import { UnsearchedTermGuard } from "app/services/unsearched-term-guard";
import { ArtistVideosListComponent } from "app/components/artist-videos-list/artist-videos-list.component";

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent, canDeactivate: [UnsearchedTermGuard] },
    { path: 'artist/:id', component: ArtistComponent, canActivate: [AlwaysAuthGuard, OnlyLoggedInUsersGuard]
        , children: [
            { path: '', redirectTo: 'tracks', pathMatch: 'full' },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent },
            { path: 'videos', component: ArtistVideosListComponent }
    ]},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule ]
})
export class AppRoutingModule {  }