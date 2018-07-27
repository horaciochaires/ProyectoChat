import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTools2Component } from './nav-tools2.component';

describe('NavTools2Component', () => {
  let component: NavTools2Component;
  let fixture: ComponentFixture<NavTools2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTools2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTools2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
