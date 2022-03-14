import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsSearchComponent } from './navs-search.component';

describe('NavsSearchComponent', () => {
  let component: NavsSearchComponent;
  let fixture: ComponentFixture<NavsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
