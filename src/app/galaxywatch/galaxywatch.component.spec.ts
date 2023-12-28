import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxywatchComponent } from './galaxywatch.component';

describe('GalaxywatchComponent', () => {
  let component: GalaxywatchComponent;
  let fixture: ComponentFixture<GalaxywatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalaxywatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxywatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
