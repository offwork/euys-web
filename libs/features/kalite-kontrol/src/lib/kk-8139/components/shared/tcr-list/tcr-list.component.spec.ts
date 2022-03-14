import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcrListComponent } from './tcr-list.component';

describe('TcrListComponent', () => {
  let component: TcrListComponent;
  let fixture: ComponentFixture<TcrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
