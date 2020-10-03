import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEvaluateComponent } from './online-evaluate.component';

describe('OnlineEvaluateComponent', () => {
  let component: OnlineEvaluateComponent;
  let fixture: ComponentFixture<OnlineEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
