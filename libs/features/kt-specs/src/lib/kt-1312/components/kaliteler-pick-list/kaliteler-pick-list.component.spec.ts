import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalitelerPickListComponent } from './kaliteler-pick-list.component';

describe('KalitelerPickListComponent', () => {
  let component: KalitelerPickListComponent;
  let fixture: ComponentFixture<KalitelerPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalitelerPickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalitelerPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
