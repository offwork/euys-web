import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerGridInputComponent } from './manpower-grid-input.component';

describe('ManpowerGridInputComponent', () => {
  let component: ManpowerGridInputComponent;
  let fixture: ComponentFixture<ManpowerGridInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpowerGridInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerGridInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
