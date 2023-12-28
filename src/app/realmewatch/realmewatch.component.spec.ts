import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmewatchComponent } from './realmewatch.component';

describe('RealmewatchComponent', () => {
  let component: RealmewatchComponent;
  let fixture: ComponentFixture<RealmewatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealmewatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealmewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
