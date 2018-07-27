import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelText2Component } from './chanel-text2.component';

describe('ChanelText2Component', () => {
  let component: ChanelText2Component;
  let fixture: ComponentFixture<ChanelText2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelText2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
