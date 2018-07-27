import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVoiceComponent } from './chanel-voice.component';

describe('ChanelVoiceComponent', () => {
  let component: ChanelVoiceComponent;
  let fixture: ComponentFixture<ChanelVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
