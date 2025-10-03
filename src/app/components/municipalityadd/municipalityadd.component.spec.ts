import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityaddComponent } from './municipalityadd.component';

describe('MunicipalityaddComponent', () => {
  let component: MunicipalityaddComponent;
  let fixture: ComponentFixture<MunicipalityaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalityaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipalityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
