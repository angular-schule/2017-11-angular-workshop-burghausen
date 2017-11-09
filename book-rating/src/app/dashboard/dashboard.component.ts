import { BookComponent } from './../book/book.component';

import { Book } from './../shared/book';
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  @ViewChild(BookComponent)
  bookComponent: BookComponent;

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Einstieg in die komponentenbasierte Entwicklung...', 5),
      new Book('111', 'AngularJS', 'Einstieg in das Framework')
    ];
    this.reorderBooks(null);
  }

  reorderBooks(book: Book) {
    // console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
