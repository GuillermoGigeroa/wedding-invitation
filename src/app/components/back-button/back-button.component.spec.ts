import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextButtonComponent } from './back-button.component';

describe('NextButtonComponent', () => {
  let component: NextButtonComponent;
  let fixture: ComponentFixture<NextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});