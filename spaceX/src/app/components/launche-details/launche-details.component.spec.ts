import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncheDetailsComponent } from './launche-details.component';

describe('LauncheDetailsComponent', () => {
  let component: LauncheDetailsComponent;
  let fixture: ComponentFixture<LauncheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauncheDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
