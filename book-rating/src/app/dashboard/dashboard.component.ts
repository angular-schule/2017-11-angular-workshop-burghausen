import { BookComponent } from './../book/book.component';

import { Book } from './../shared/book';
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  @ViewChild(BookComponent)
  bookComponent: BookComponent;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(books => {
      this.books = books;
      this.reorderBooks(null);
    });
  }

  reorderBooks(book: Book) {
    // console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
