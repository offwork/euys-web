import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxFieldsetComponent } from './min-max-fieldset.component';

describe('MinMaxFieldsetComponent', () => {
  let component: MinMaxFieldsetComponent;
  let fixture: ComponentFixture<MinMaxFieldsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxFieldsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
