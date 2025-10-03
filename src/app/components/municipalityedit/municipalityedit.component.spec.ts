import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityeditComponent } from './municipalityedit.component';

describe('MunicipalityeditComponent', () => {
  let component: MunicipalityeditComponent;
  let fixture: ComponentFixture<MunicipalityeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalityeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipalityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
