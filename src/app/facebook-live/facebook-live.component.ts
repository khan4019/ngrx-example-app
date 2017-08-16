import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ScoreState} from '../reducers/reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-facebook-live',
  templateUrl: './facebook-live.component.html',
  styleUrls: ['./facebook-live.component.css']
})
export class FacebookLiveComponent implements OnInit {
  latestScore: Observable<number>
  constructor(private store: Store<ScoreState>) { 
    this.latestScore = this.store.select('score');
  }

  ngOnInit() {
  }

}
