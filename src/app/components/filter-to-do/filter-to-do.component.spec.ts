import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToDoComponent } from './filter-to-do.component';

describe('FilterToDoComponent', () => {
  let component: FilterToDoComponent;
  let fixture: ComponentFixture<FilterToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterToDoComponent]
    });
    fixture = TestBed.createComponent(FilterToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
