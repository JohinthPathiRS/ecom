import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinixComponent } from './infinix.component';

describe('InfinixComponent', () => {
  let component: InfinixComponent;
  let fixture: ComponentFixture<InfinixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfinixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfinixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
