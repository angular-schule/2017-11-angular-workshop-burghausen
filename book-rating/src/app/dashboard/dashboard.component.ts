import { BookComponent } from './../book/book.component';

import { Book } from './../shared/book';
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent
  implements OnInit, AfterViewInit, OnDestroy {

  books: Book[];

  @ViewChild(BookComponent)
  bookComponent: BookComponent;

  subscription: any;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Einstieg in die komponentenbasierte Entwicklung...', 5),
      new Book('111', 'AngularJS', 'Einstieg in das Framework')
    ];
    this.reorderBooks(null);
  }

  ngAfterViewInit() {
    this.subscription = this.bookComponent.rated
      .subscribe((book) => console.log('RxJS!', book));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reorderBooks(book: Book) {
    //console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
