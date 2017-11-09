import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

fdescribe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should always call rateUpAllowed()', () => {

    let rateUpAllowedWasCalled = false;

    component.book = {
      rating: 0,
      rateUpAllowed: () => rateUpAllowedWasCalled = true,
      rateDownAllowed: () => false
    } as Book;

    fixture.detectChanges();
    expect(rateUpAllowedWasCalled).toBe(true);
  });
});
