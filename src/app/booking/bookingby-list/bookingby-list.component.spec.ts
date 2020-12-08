import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingbyListComponent } from './bookingby-list.component';

describe('BookingbyListComponent', () => {
  let component: BookingbyListComponent;
  let fixture: ComponentFixture<BookingbyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingbyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingbyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
