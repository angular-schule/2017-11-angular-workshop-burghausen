import { BookComponent } from './../book/book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent   // <-- this is now an intergration test
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should always have a list of 2 books', () => {
    expect(component.books.length).toBe(2);
  });

  // State driven test
  it('should sort descending', () => {

    component.books = [
      new Book('Buch A', '', '', 3),
      new Book('Buch B', '', '', 5)
    ];

    component.reorderBooks(null);

    expect(component.books[0].isbn).toBe('Buch B');
    expect(component.books[1].isbn).toBe('Buch A');
  });
});
