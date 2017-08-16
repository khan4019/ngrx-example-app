import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ScoreState} from '../reducers/reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-espn',
  templateUrl: './espn.component.html',
  styleUrls: ['./espn.component.css']
})
export class EspnComponent implements OnInit {
  latestScore: Observable<number>
  constructor(private store: Store<ScoreState>) { 
    this.latestScore = this.store.select('score');
  }

  ngOnInit() {

  }

}
