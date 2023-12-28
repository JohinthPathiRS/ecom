import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireboltComponent } from './firebolt.component';

describe('FireboltComponent', () => {
  let component: FireboltComponent;
  let fixture: ComponentFixture<FireboltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireboltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireboltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
