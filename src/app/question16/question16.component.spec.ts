import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question16Component } from './question16.component';

describe('Question16Component', () => {
  let component: Question16Component;
  let fixture: ComponentFixture<Question16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
