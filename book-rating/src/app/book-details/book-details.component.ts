import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.params.isbn;
  }
}
