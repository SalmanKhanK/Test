import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question19Component } from './question19.component';

describe('Question19Component', () => {
  let component: Question19Component;
  let fixture: ComponentFixture<Question19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
