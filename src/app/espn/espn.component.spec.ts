import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspnComponent } from './espn.component';

describe('EspnComponent', () => {
  let component: EspnComponent;
  let fixture: ComponentFixture<EspnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
