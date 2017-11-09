import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
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

    component.book = {
      rating: 0,
      rateUpAllowed: () => false,
      rateDownAllowed: () => false
    } as Book;

    spyOn(component.book, 'rateUpAllowed');

    fixture.detectChanges();
    expect(component.book.rateUpAllowed).toHaveBeenCalled();
  });
});
