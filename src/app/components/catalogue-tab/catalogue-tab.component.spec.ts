import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueTabComponent } from './catalogue-tab.component';

describe('CatalogueTabComponent', () => {
  let component: CatalogueTabComponent;
  let fixture: ComponentFixture<CatalogueTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
