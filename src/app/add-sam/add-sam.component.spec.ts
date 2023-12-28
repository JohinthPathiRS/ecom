import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSamComponent } from './add-sam.component';

describe('AddSamComponent', () => {
  let component: AddSamComponent;
  let fixture: ComponentFixture<AddSamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
