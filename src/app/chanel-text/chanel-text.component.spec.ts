import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelTextComponent } from './chanel-text.component';

describe('ChanelTextComponent', () => {
  let component: ChanelTextComponent;
  let fixture: ComponentFixture<ChanelTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
