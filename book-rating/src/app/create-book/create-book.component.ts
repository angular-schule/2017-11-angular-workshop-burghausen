import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @ViewChild(NgForm)
  bookForm: NgForm;

  book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.reset(this.book);
  }
}
