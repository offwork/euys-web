import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImalatLotCriteriaComponent } from './imalat-lot-criteria.component';

describe('ImalatLotCriteriaComponent', () => {
  let component: ImalatLotCriteriaComponent;
  let fixture: ComponentFixture<ImalatLotCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImalatLotCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImalatLotCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
