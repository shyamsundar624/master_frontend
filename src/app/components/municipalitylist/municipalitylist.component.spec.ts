import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitylistComponent } from './municipalitylist.component';

describe('MunicipalitylistComponent', () => {
  let component: MunicipalitylistComponent;
  let fixture: ComponentFixture<MunicipalitylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalitylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipalitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
