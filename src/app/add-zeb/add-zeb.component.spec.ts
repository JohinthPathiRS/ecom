import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZebComponent } from './add-zeb.component';

describe('AddZebComponent', () => {
  let component: AddZebComponent;
  let fixture: ComponentFixture<AddZebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddZebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddZebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
