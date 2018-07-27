import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVoice2Component } from './chanel-voice2.component';

describe('ChanelVoice2Component', () => {
  let component: ChanelVoice2Component;
  let fixture: ComponentFixture<ChanelVoice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelVoice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelVoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
