import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplewatchComponent } from './applewatch.component';

describe('ApplewatchComponent', () => {
  let component: ApplewatchComponent;
  let fixture: ComponentFixture<ApplewatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplewatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
