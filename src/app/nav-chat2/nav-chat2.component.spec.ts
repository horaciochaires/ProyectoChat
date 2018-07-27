import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChat2Component } from './nav-chat2.component';

describe('NavChat2Component', () => {
  let component: NavChat2Component;
  let fixture: ComponentFixture<NavChat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
