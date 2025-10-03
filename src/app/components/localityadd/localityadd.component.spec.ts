import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityaddComponent } from './localityadd.component';

describe('LocalityaddComponent', () => {
  let component: LocalityaddComponent;
  let fixture: ComponentFixture<LocalityaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalityaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
