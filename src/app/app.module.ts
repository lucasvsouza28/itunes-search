import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule, FormControl } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
