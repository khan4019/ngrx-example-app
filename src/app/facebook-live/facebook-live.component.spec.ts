import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLiveComponent } from './facebook-live.component';

describe('FacebookLiveComponent', () => {
  let component: FacebookLiveComponent;
  let fixture: ComponentFixture<FacebookLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
