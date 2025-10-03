import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityeditComponent } from './localityedit.component';

describe('LocalityeditComponent', () => {
  let component: LocalityeditComponent;
  let fixture: ComponentFixture<LocalityeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalityeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
