import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueMasterComponent } from './catalogue-master.component';

describe('CatalogueMasterComponent', () => {
  let component: CatalogueMasterComponent;
  let fixture: ComponentFixture<CatalogueMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
