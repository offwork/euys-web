import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmPratigiListComponent } from './sm-pratigi-list.component';

describe('SmPratigiListComponent', () => {
  let component: SmPratigiListComponent;
  let fixture: ComponentFixture<SmPratigiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmPratigiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmPratigiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
