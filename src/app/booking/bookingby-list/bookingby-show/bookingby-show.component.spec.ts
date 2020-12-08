import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingbyShowComponent } from './bookingby-show.component';

describe('BookingbyShowComponent', () => {
  let component: BookingbyShowComponent;
  let fixture: ComponentFixture<BookingbyShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingbyShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingbyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
