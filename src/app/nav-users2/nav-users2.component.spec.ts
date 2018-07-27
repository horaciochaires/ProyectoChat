import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUsers2Component } from './nav-users2.component';

describe('NavUsers2Component', () => {
  let component: NavUsers2Component;
  let fixture: ComponentFixture<NavUsers2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUsers2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUsers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
