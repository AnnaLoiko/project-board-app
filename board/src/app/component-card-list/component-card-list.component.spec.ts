import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCardListComponent } from './component-card-list.component';

describe('ComponentCardListComponent', () => {
  let component: ComponentCardListComponent;
  let fixture: ComponentFixture<ComponentCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
