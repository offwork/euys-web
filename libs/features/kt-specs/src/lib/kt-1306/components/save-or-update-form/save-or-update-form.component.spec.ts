import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOrUpdateFormComponent } from './save-or-update-form.component';

describe('SaveOrUpdateFormComponent', () => {
  let component: SaveOrUpdateFormComponent;
  let fixture: ComponentFixture<SaveOrUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveOrUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOrUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
