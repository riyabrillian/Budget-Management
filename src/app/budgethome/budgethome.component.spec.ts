import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgethomeComponent } from './budgethome.component';

describe('BudgethomeComponent', () => {
  let component: BudgethomeComponent;
  let fixture: ComponentFixture<BudgethomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgethomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
