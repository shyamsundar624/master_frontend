import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageaddComponent } from './villageadd.component';

describe('VillageaddComponent', () => {
  let component: VillageaddComponent;
  let fixture: ComponentFixture<VillageaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillageaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillageaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
