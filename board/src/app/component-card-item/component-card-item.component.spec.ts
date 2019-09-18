import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCardItemComponent } from './component-card-item.component';

describe('ComponentCardItemComponent', () => {
  let component: ComponentCardItemComponent;
  let fixture: ComponentFixture<ComponentCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
