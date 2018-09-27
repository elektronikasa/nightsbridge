import { TestBed } from '@angular/core/testing';

import { OverlayPanelService } from './overlay-panel.service';

describe('OverlayPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverlayPanelService = TestBed.get(OverlayPanelService);
    expect(service).toBeTruthy();
  });
});
