import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {ScoreReducer} from './reducers/reducers';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { EspnComponent } from './espn/espn.component';
import { FacebookLiveComponent } from './facebook-live/facebook-live.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    EspnComponent,
    FacebookLiveComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({score:ScoreReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
