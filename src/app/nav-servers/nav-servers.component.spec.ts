import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavServersComponent } from './nav-servers.component';

describe('NavServersComponent', () => {
  let component: NavServersComponent;
  let fixture: ComponentFixture<NavServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
