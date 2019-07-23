import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradationComponent } from './gradation.component';

describe('GradationComponent', () => {
  let component: GradationComponent;
  let fixture: ComponentFixture<GradationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
