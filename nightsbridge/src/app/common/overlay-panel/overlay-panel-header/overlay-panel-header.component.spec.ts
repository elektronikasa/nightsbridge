import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPanelHeaderComponent } from './overlay-panel-header.component';

describe('OverlayPanelHeaderComponent', () => {
  let component: OverlayPanelHeaderComponent;
  let fixture: ComponentFixture<OverlayPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
