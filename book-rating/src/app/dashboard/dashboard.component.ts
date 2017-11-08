import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Einstieg in die komponentenbasierte Entwicklung...', 5),
      new Book('111', 'AngularJS', 'Einstieg in das Framework')
    ];
  }
}
