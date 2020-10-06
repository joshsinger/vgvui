import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnpFilterComponent } from './snp-filter.component';

describe('SnpFilterComponent', () => {
  let component: SnpFilterComponent;
  let fixture: ComponentFixture<SnpFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnpFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
