import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPratigiListComponent } from './cm-pratigi-list.component';

describe('CmPratigiListComponent', () => {
  let component: CmPratigiListComponent;
  let fixture: ComponentFixture<CmPratigiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmPratigiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPratigiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
