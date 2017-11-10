import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';
import { map, retry } from 'rxjs/operators'; // letable operator!

@Injectable()
export class BookStoreService {

  api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {

    return [
      new Book('000', 'Angular', 'Einstieg in die komponentenbasierte Entwicklung...', 5),
      new Book('111', 'AngularJS', 'Einstieg in das Framework')
    ];
  }

  getAll(): Observable<Book[]> {

    return this.http
      .get<any[]>(`${ this.api }/books`).pipe(
        retry(3),
        map(rawBooks => rawBooks.map(b =>
          new Book(b.isbn, b.title, b.description, b.rating))
        )
      );
  }
}
