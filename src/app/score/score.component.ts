import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/interval';

import {Store} from '@ngrx/store';
import {ScoreState} from '../reducers/reducers';
import {INCREMENT, DECREMENT, RESET} from '../actions/actions';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  score: Observable<number>;
  constructor(private store: Store<ScoreState>) { 
    this.score = store.select('score');
  }
  
  ngOnInit() {
    
  }

  increment(){
    // this.score = this.score + 1;
    this.store.dispatch({type:INCREMENT})
  }

  decrement(){
    this.store.dispatch({type: DECREMENT})
  }

  reset(){
    this.store.dispatch({type: RESET});
  }



}
