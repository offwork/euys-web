import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaglamaListComponent } from './yaglama-list.component';

describe('YaglamaListComponent', () => {
  let component: YaglamaListComponent;
  let fixture: ComponentFixture<YaglamaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaglamaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaglamaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
