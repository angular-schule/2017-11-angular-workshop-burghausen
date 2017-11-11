import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { pluck, switchMap } from 'rxjs/operators'; // letable operator!


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: Observable<string>;

  // book$: Observable<Book>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.params.pipe(pluck('isbn'));

    // TODO:
    /*
    this.book$ = this.route.params.pipe(
      pluck('isbn'),
      switchMap(isbn => this.store.getSingle(isbn))
    );
    */

  }
}
