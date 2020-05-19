import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question15Component } from './question15.component';

describe('Question15Component', () => {
  let component: Question15Component;
  let fixture: ComponentFixture<Question15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
