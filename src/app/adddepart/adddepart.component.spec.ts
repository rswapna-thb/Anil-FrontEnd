import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartComponent } from './adddepart.component';

describe('AdddepartComponent', () => {
  let component: AdddepartComponent;
  let fixture: ComponentFixture<AdddepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
