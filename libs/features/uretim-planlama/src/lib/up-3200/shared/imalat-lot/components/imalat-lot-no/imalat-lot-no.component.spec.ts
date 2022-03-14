import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImalatLotNoComponent } from './imalat-lot-no.component';

describe('ImalatLotNoComponent', () => {
  let component: ImalatLotNoComponent;
  let fixture: ComponentFixture<ImalatLotNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImalatLotNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImalatLotNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
