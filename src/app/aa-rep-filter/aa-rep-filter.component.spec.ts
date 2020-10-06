import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaRepFilterComponent } from './aa-rep-filter.component';

describe('AaRepFilterComponent', () => {
  let component: AaRepFilterComponent;
  let fixture: ComponentFixture<AaRepFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaRepFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaRepFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
