import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledPanelComponent } from './styled-panel.component';

describe('StyledPanelComponent', () => {
  let component: StyledPanelComponent;
  let fixture: ComponentFixture<StyledPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
