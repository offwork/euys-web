import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeHeaderComponent } from './free-header.component';

describe('FreeHeaderComponent', () => {
  let component: FreeHeaderComponent;
  let fixture: ComponentFixture<FreeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
