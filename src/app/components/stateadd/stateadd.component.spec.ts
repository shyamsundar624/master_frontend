import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateaddComponent } from './stateadd.component';

describe('StateaddComponent', () => {
  let component: StateaddComponent;
  let fixture: ComponentFixture<StateaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
